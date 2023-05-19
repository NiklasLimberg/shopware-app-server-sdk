import {
  createRegistationResponse,
  createRegistration,
} from "./registration.ts";

import { AppServerOptions } from "../../types/global.d.ts";

export async function handleRegistrationRequest(
  request: Request,
  appConfig: AppServerOptions["appConfig"],
  pendingRegistrationStorage:
    AppServerOptions["storage"]["pendingRegistration"],
): Promise<Response> {
  const searchParams = new URL(request.url).searchParams;

  const registrationParamter = ["shop-id", "shop-url", "timestamp"].map(
    (paramter) => searchParams.get(paramter) ?? "",
  ).filter((val) => val.length);

  if (registrationParamter.length != 3) {
    return new Response("Missing request parameters", { status: 400 });
  }

  const [shopId, shopUrl, timestamp] = registrationParamter;

  const shopwareAppSignature = request.headers.get(
    "shopware-app-signature",
  );

  if (!shopwareAppSignature) {
    return new Response("Missing shopware-app-signature header", {
      status: 400,
    });
  }

  const registrationError = appConfig.validateRegistration?.({
    shopId,
    shopUrl,
    timestamp,
    shopwareAppSignature,
  }) ?? "";

  if (registrationError.length !== 0) {
    return new Response(
      JSON.stringify({
        error: registrationError,
      }),
      { status: 400 },
    );
  }
  const pendingRegistration = await createRegistration({
    shopId,
    shopUrl,
    shopwareAppSignature,
    timestamp,
  }, appConfig.appSecret);

  pendingRegistrationStorage.set(pendingRegistration);

  const registrationResponse = await createRegistationResponse(
    pendingRegistration,
    {
      authorizeCallbackUrl: appConfig.appBaseUrl + appConfig.confirmationUrl,
      appSecret: appConfig.appSecret,
      appName: appConfig.appName,
    },
  );

  return new Response(JSON.stringify(registrationResponse), {
    status: 200,
  });
}
