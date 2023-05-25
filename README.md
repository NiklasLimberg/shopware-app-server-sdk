# Shopware App Server SDK

Type safe shopware app server SDK for all JavaScript runtimes

## Features

- Handles the [authentication handshake](https://developer.shopware.com/docs/guides/plugins/apps/app-base-guide#setup)
- Provides typescript types for all webhooks
- API client for the [Admin API](https://developer.shopware.com/docs/concepts/api/admin-api)
- Compatible with everything that uses web native [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects
- Uses the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

## Examples

## Deno with Deno KV

This SDK doesn't have any dependencies in Deno.

```typescript
import { AppServer } from "../../packages/shopware-app-server-sdk/mod.ts";
import type {
  PendingRegistration,
  Shop,
} from "../../packages/shopware-app-server-sdk/types.d.ts";

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
  url: "/customerLoggedInEvent",
  name: "checkout.customer.login",
}, async (message) => {
   
   // type-safe message based on web hook name 
  console.log("customerLoggedInEvent", message);
});


const conn = Deno.listen({ port: 3000 });
const httpConn = Deno.serveHttp(await conn.accept());

for await (const httpEvent of httpConn) {
  const response = await server.handle(httpEvent.request);

  httpEvent.respondWith(
    response ?? new Response("Not found", {
      status: 404,
    }),
  );
}
```

### Node

Node does not provide a native way for turning their proprietary [IncomingMessage](https://nodejs.org/api/http.html#class-httpincomingmessage) and [OutgoingMessage](https://nodejs.org/api/http.html#class-httpoutgoingmessage) objects into the web native [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects.

That is why the following example uses [Hono](https://hono.dev/) with a catch-all route as translation layer.
[node-localstorage](https://github.com/lmaccherone/node-localstorage) is used, because node not equipped with any native key/value store.

Both are not project requirements, you can use whatever you want!

```javascript
import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { AppServer } from "server-sdk-node";
import { JSONStorage } from "node-localstorage";

const localstorage = new JSONStorage("./storage");

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
      set: (shop) =>
        localstorage.setItem(`shopRegistration/${shop.shopId}`, shop),
      get: (id) => localstorage.getItem(`shopRegistration/${id}`),
    },
    pendingRegistration: {
      set: (pendingRegistration) =>
        localstorage.setItem(
          `pendingRegistration/${pendingRegistration.shopId}`,
          pendingRegistration,
        ),
      get: (id) => localstorage.getItem(`pendingRegistration/${id}`),
    },
  },
});

server.registerWebHook({
  url: "/customerLoggedInEvent",
  name: "checkout.customer.login",
}, async (message) => {
  console.log("customerLoggedInEvent", message);
});

const app = new Hono();

app.all("*", async (context) => {
  const response = await server.handle(context.req.raw);

  return response ? response : new Response("Not Found", { status: 404 });
}, {});

serve(app, (info) => {
  console.log(`Listening on ${info.address}:${info.port}`);
});
```
# Type generation 

The process by which types are generate is documented in the type generator [README](./generators/type-generator/README.md)

# Prior art

This SDK was largely inspired by the [FriendsOfShopware/app-server-sdk-js](https://github.com/FriendsOfShopware/app-server-sdk-js), that does not provide any type safety.
