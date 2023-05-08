import { randomString, sign, verify } from "./crypto.ts";

export type AppInformation = {
  authorizeCallbackUrl: string;
  appName: string;
  appSecret: string;
};

export type PendingRegistration = {
  readonly shopId: string;
  readonly shopUrl: string;
  readonly shopSecret: string;
};

export type ShopInfo = {
  shopId: string;
  shopUrl: string;
  shopwareAppSignature: string;
  timeStamp: string;
};

export async function createRegistration(
  {
    shopId,
    shopUrl,
    shopwareAppSignature,
    timeStamp,
  }: ShopInfo,
  appSecret: AppInformation["appSecret"],
): Promise<PendingRegistration> {
  const isValid = await verify(
    shopwareAppSignature,
    `shop-id=${shopId}&shop-url=${shopUrl}&timestamp=${timeStamp}`,
    appSecret,
  );

  if (!isValid) {
    throw new Error("Cannot validate app signature");
  }

  return {
    shopId,
    shopUrl,
    shopSecret: randomString(),
  };
}

export async function createRegistationResponse(
  { shopId, shopSecret, shopUrl }: PendingRegistration,
  { authorizeCallbackUrl, appName, appSecret }: AppInformation,
) {
  return {
    proof: await sign(
      shopId + shopUrl + appName,
      appSecret,
    ),
    secret: shopSecret,
    confirmation_url: authorizeCallbackUrl,
  };
}
