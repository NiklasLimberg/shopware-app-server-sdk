import type { Events } from "../types/webhooks.d.ts";

type MaybePromise<T> = T | Promise<T>;

export type Callback<T extends keyof Events> = (
  message: Events[T],
  shop: Shop,
) => MaybePromise<void | unknown>;

export type WebhookListener = {
  name: string;
  callback: Callback<keyof Events>;
};

export type Shop = {
  apiKey: string;
  secretKey: string;
  shopSecret: string;
  timestamp: string;
  shopUrl: string;
  shopId: string;
};

export type PendingRegistration = {
  shopId: string;
  shopSecret: string;
  shopUrl: string;
};


export type PendingRegistrationStorage = {
  set: (registration: PendingRegistration) => void;
  get: (shopId: string) => MaybePromise<PendingRegistration | null>;
};

export type ShopRegistrationStorage = {
  get: (id: string) => MaybePromise<Shop | null>;
  set: (data: Shop) => void;
};

export type AppServerOptions = {
  appConfig: {
    appBaseUrl: string;
    appName: string;
    appSecret: string;
    registrationUrl: string;
    confirmationUrl: string;
    validateRegistration?: (
      arg0: {
        shopId: string;
        shopUrl: string;
        timestamp: string;
        shopwareAppSignature: string;
      },
    ) => string | void;
  };
  storage: {
    pendingRegistration: PendingRegistrationStorage;
    shopRegistration: ShopRegistrationStorage;
  };
};
