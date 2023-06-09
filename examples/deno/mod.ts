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
  console.log("customerLoggedInEvent", message);
  const promise = new Promise((_) => {});

  await promise;
});

server.registerWebHook({
  url: "/customerLoggedOutEvent",
  name: "checkout.customer.logout",
}, (message) => {
  console.log("customerLoggedOutEvent", message.data.payload);
  const promise = new Promise((_) => {});

  return promise;
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
