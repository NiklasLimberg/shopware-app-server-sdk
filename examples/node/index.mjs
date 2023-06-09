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

const app = new Hono();

app.all("*", async (context) => {
  const response = await server.handle(context.req.raw);

  if( response) {
    return response;
  }

  return new Response("Not Found", { status: 404 });
}, {});

serve(app, (info) => {
  console.log(`Listening on ${info.address}:${info.port}`);
});
