import { randomString, sign, verify } from "./crypto.ts";

import type { PendingRegistration } from "../../types/global.d.ts";

export async function createRegistration(
  {
    shopId,
    shopUrl,
    shopwareAppSignature,
    timestamp,
  }: {
    shopId: string;
    shopUrl: string;
    shopwareAppSignature: string;
    timestamp: string;
  },
  appSecret: string,
): Promise<PendingRegistration> {
  const isValid = await verify(
    shopwareAppSignature,
    `shop-id=${shopId}&shop-url=${shopUrl}&timestamp=${timestamp}`,
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
  { authorizeCallbackUrl, appName, appSecret }: {
    authorizeCallbackUrl: string;
    appName: string;
    appSecret: string;
  },
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
