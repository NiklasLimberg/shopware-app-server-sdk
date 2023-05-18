import { serve, ServeInit } from "https://deno.land/std@0.186.0/http/mod.ts";

import type { Events } from "../types/webhooks.d.ts";
import type {
  AppServerOptions,
  Callback,
  PendingRegistration,
  Shop,
  WebhookListener,
} from "./types.d.ts";

import { handleRegistrationRequest } from "./handleRegistrationRequest.ts";
import { handleConfirmationRequest } from "./handleConfirmationRequest.ts";

import { verify } from "../server-sdk/crypto.ts";

class AppServer {
  #appConfig: AppServerOptions["appConfig"];
  #storage: AppServerOptions["storage"];

  constructor({ appConfig, storage }: AppServerOptions) {
    this.#appConfig = appConfig;
    this.#storage = storage;
  }

  routes: Map<string, WebhookListener> = new Map();

  registerWebHook<T extends keyof Events>(
    { url, name }: { url: string; name: T },
    callback: Callback,
  ) {
    if (this.routes.has(url)) {
      throw new Error(`Webhook was already registered for: ${url}`);
    }

    this.routes.set(url, {
      name,
      callback,
    });
  }

  async handle(request: Request): Promise<Response | null> {
    // todo check invocations for methods
    // if (request.method !== "POST") {
    //  return new Response("Method not allowed", {
    //    status: 405,
    //  });
    //}

    const url = new URL(request.url);

    if (url.pathname === this.#appConfig.registrationUrl) {
      return handleRegistrationRequest(
        request,
        this.#appConfig,
        this.#storage.pendingRegistration,
      );
    }

    if (url.pathname === this.#appConfig.confirmationUrl) {
      return handleConfirmationRequest(request, this.#storage);
    }

    const listener = this.routes.get(url.pathname);

    if (!listener) {
      return null;
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
      console.log(typeof shopRegistration);
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

      console.log(await response?.clone().text());

      return response ?? new Response(`Not found`, {
        status: 404,
      });
    }, options);
  }
}

const kv = await Deno.openKv();

const server = new AppServer({
  appConfig: {
    appBaseUrl: "localhost:3000",
    appName: "TestApp",
    appSecret: "TEST",
    registrationUrl: "/app/register",
    confirmationUrl: "/app/register/confirm",
  },
  storage: {
    shopRegistration: {
      set: (shop) => kv.set(["shopRegistration", shop.shopId], shop),
      get: async (id) => {
        const kvEntry = await kv.get<Shop>(["shopRegistration", id]);
        return kvEntry?.value;
      },
    },
    pendingRegistration: {
      set: (pendingRegistration) =>
        kv.set(
          ["pendingRegistration", pendingRegistration.shopId],
          pendingRegistration,
        ),
      get: async (id) => {
        const kvEntry = kv.get<PendingRegistration>([
          "pendingRegistration",
          id,
        ]);
        return (await kvEntry)?.value;
      },
    },
  },
});

server.registerWebHook({
  url: "/customerLogedInEvent",
  name: "checkout.customer.login",
}, async (message) => {
  console.log("customerLogedInEvent", message);
  const promise = new Promise((_) => {});

  await promise;
});

server.registerWebHook({
  url: "/customerLogedOutEvent",
  name: "checkout.customer.logout",
}, async (message) => {
  console.log("customerLogedOutEvent", message);
  const promise = new Promise((_) => {});

  await promise;
});

server.listen({
  port: 3000,
});
