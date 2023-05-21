import { verify } from "./crypto.ts";

type WebHookInvocation = {
  shopSignature: string;
  webHookBody: string;
};

/**
 * Validates whether a POST webhook was triggered by a given shop
 * @param webHookInvocation - Information about the shop that triggered the webhook
 * @param webHookInvocation.shopSignature - The signature of the shop can be found in the "shopware-shop-signature" header
 * @param webHookInvocation.webHookBody the raw webhook body
 * @param shopSecret - The secret of the shop. Shops can be identified by the webHookBody.source.shopId
 */
export function verifyPostRequest(
  { shopSignature, webHookBody }: WebHookInvocation,
  shopSecret: string,
) {
  return verify(
    shopSignature,
    webHookBody,
    shopSecret,
  );
}

/**
 * Validates whether a GET webhook was triggered by a given shop
 * @param searchParams the complete searchParams passed to the webhook
 * @param shopSecret the shop secret. The shop can be identified by the "shop-id" query parameter
 */
export function verifyGetRequest(
  searchParams: URLSearchParams,
  shopSecret: string,
) {
  const shopSignature = searchParams.get("shopware-shop-signature");

  if (!shopSignature) {
    return false;
  }

  return verify(shopSignature, searchParams.toString(), shopSecret);
}
