import {
  createRegistrationResponse,
  createRegistration,
} from "./registration.ts";

import type { AppServerOptions } from "./types.d.ts";

export async function handleRegistrationRequest(
  request: Request,
  appConfig: AppServerOptions["appConfig"],
  pendingRegistrationStorage:
    AppServerOptions["storage"]["pendingRegistration"],
): Promise<Response> {
  const searchParams = new URL(request.url).searchParams;

  const registrationParameters = ["shop-id", "shop-url", "timestamp"].map(
    (parameter) => searchParams.get(parameter) ?? "",
  ).filter((val) => val.length);

  if (registrationParameters.length != 3) {
    return new Response("Missing request parameters", { status: 400 });
  }

  const [shopId, shopUrl, timestamp] = registrationParameters;

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

  const registrationResponse = await createRegistrationResponse(
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
