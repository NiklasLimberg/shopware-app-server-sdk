import type { AppServerOptions } from "./types.d.ts";
import { verify } from "./crypto.ts";

export async function handleConfirmationRequest(
  request: Request,
  storage: AppServerOptions["storage"],
): Promise<Response> {
  const bodyContent = await request.text();
  const body = JSON.parse(bodyContent) as {
    shopId?: string;
    apiKey?: string;
    secretKey?: string;
    shopUrl?: string;
    timestamp?: string;
  };

  const shopwareAppSignature = request.headers.get("shopware-shop-signature");

  if (
    typeof body.shopId !== "string" ||
    typeof body.apiKey !== "string" ||
    typeof body.secretKey !== "string" ||
    typeof body.shopUrl !== "string" ||
    typeof body.timestamp !== "string" ||
    !shopwareAppSignature
  ) {
    throw new Response("Invalid Request", { status: 400 });
  }

  const pendingRegistration = await storage.pendingRegistration.get(
    body.shopId,
  );

  if (pendingRegistration === null) {
    return new Response(`Cannot find shop for this id: ${body.shopId}`, {
      status: 400,
    });
  }

  if (
    !await verify(
      shopwareAppSignature,
      bodyContent,
      pendingRegistration.shopSecret,
    )
  ) {
    return new Response("Cannot validate app signature", { status: 400 });
  }

  storage.shopRegistration.set({
    apiKey: body.apiKey,
    secretKey: body.secretKey,
    shopSecret: pendingRegistration.shopSecret,
    shopId: body.shopId,
    shopUrl: body.shopUrl,
    timestamp: body.timestamp,
  });

  return new Response(null, { status: 204 });
}
