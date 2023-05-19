import { AppServer } from "../../packages/server-sdk-deno/mod.ts";
import type {
  PendingRegistration,
  Shop,
} from "../../packages/server-sdk-deno/types.d.ts";

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
}, (message) => {
  console.log("customerLogedOutEvent", message.data.payload);
  const promise = new Promise((_) => {});

  return promise;
});

server.listen({
  port: 3000,
});
