import { AppServer } from "../../npm/src/server-sdk-deno/mod.js";
import { JSONStorage } from "node-localstorage";

const localstorage = new JSONStorage('./storage')

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
      set: (shop) => localstorage.setItem(`shopRegistration/${shop.shopId}`, shop),
      get: async (id) => {
        const kvEntry = await localstorage.getItem(`shopRegistration/${id}`);
        return kvEntry?.value;
      },
    },
    pendingRegistration: {
      set: (pendingRegistration) =>
        localstorage.setItem(
          `pendingRegistration/${pendingRegistration.shopId}`,
          pendingRegistration,
        ),
      get: async (id) => {
        const kvEntry = kv.getItem(`pendingRegistration/${id}`);
        return kvEntry?.value;
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

