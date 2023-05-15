import { resolve } from "https://deno.land/std@0.140.0/path/win32.ts";
import type { ShopInfo } from "../server-sdk/mod.ts";
import type { Events } from "../types/webhooks.d.ts";
import {
  serve,
  ServeInit,
  Status,
} from "https://deno.land/std@0.186.0/http/mod.ts";

type Callback = (message: Events[keyof Events], shop: ShopInfo) =>  Promise<void> | void

type WebhookListener = {
  name: string;
  callback: Callback;
};

class AppServer {
  constructor() {}

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

  async handle(request: Request): Promise<Status> {
    // match register routes

    const listener = this.routes.get(request.url);

    // todo request validation

    const shop = {
      shopId: 'some-id',
      shopUrl: 'url',
      shopwareAppSignature: '',
      timeStamp: ''
    } satisfies ShopInfo

    try {
      if (!listener) {
        return 404;
      }

      await listener.callback(await request.json(), shop)
    } catch (e: unknown) {
      console.log(e);

      return 500;
    }

    return 200;
  }

  listen(options: ServeInit) {
    return serve(async (request) => {
      const statusCode = await this.handle(request);
      
      return new Response(null, { status: statusCode });
    }, options);
  }
}

const server = new AppServer();

server.registerWebHook({
  url: "/customer-loged-in-event",
  name: "checkout.customer.before.login",
}, async (message) => {
  console.log(message);
  const promise = new Promise(_ => {})

  await promise;
});
