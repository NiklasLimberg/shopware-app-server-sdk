import { serve, ServeInit } from "https://deno.land/std@0.186.0/http/mod.ts";

import type { Events } from "../types/webhooks.d.ts";
import type {
  AppServerOptions,
  Callback,
  WebhookListener,
} from "./types.d.ts";

import { handleRegistrationRequest } from "./handleRegistrationRequest.ts";
import { handleConfirmationRequest } from "./handleConfirmationRequest.ts";

import { verify } from "../server-sdk/crypto.ts";

export class AppServer {
  #appConfig: AppServerOptions["appConfig"];
  #storage: AppServerOptions["storage"];
  #routes: Map<string, WebhookListener> = new Map();

  constructor({ appConfig, storage }: AppServerOptions) {
    this.#appConfig = appConfig;
    this.#storage = storage;
  }

  registerWebHook<T extends keyof Events>(
    { url, name }: { url: string; name: T },
    callback: Callback<T>,
  ) {
    if (this.#routes.has(url)) {
      throw new Error(`Webhook was already registered for: ${url}`);
    }

    this.#routes.set(url, {
      name,
      callback: callback as Callback<keyof Events>,
    });
  }

  async handle(request: Request): Promise<Response | null> {
    const url = new URL(request.url);

    if (url.pathname === this.#appConfig.registrationUrl) {
      if (request.method !== "GET") {
        return new Response("Method not allowed", {
          status: 405,
        });
      }

      return handleRegistrationRequest(
        request,
        this.#appConfig,
        this.#storage.pendingRegistration,
      );
    }

    if (url.pathname === this.#appConfig.confirmationUrl) {
      if (request.method !== "POST") {
        return new Response("Method not allowed", {
          status: 405,
        });
      }

      return handleConfirmationRequest(request, this.#storage);
    }

    const listener = this.#routes.get(url.pathname);

    if (!listener) {
      return null;
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
      });
    }

    const shopwareShopSignature = request.headers.get(
      "shopware-shop-signature",
    );

    const webHookText = await request.text();
    const webHookContent = JSON.parse(webHookText);

    if (!shopwareShopSignature) {
      return new Response("Missing `shopware-shop-signature` header", {
        status: 400,
      });
    }

    const shopRegistration = await this.#storage.shopRegistration.get(
      webHookContent.source.shopId,
    );

    if (!shopRegistration) {
      return new Response("Internal server error", { status: 500 });
    }

    if (
      !await verify(
        shopwareShopSignature,
        webHookText,
        shopRegistration.shopSecret,
      )
    ) {
      return new Response("Forbidden", { status: 403 });
    }

    let hasErrors = false;
    try {
      await listener.callback(webHookContent, shopRegistration);
    } catch (e: unknown) {
      hasErrors = true;
      console.log(e);
    }

    return hasErrors
      ? new Response("Internal Server Error", { status: 500 })
      : new Response("", { status: 200 });
  }

  listen(options: ServeInit) {
    return serve(async (request) => {
      const response = await this.handle(request);

      return response ?? new Response("Not found", {
        status: 404,
      });
    }, options);
  }
}
