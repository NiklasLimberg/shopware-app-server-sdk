interface Shop {
  shopId: string;
  shopUrl: string;
  clientId: string;
  clientSecret: string;
}

export class HttpClient {
  private token: { expiryDate: Date; content: string } | null;

  constructor(public shop: Shop) {
    this.token = null;
  }

  async fetchToken(): Promise<string> {
    const authResponse = await globalThis.fetch(
      `${this.shop.shopUrl}/api/oauth/token`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: this.shop.clientId,
          client_secret: this.shop.clientSecret,
        }),
      },
    );

    if (!authResponse.ok) {
      throw new ApiClientAuthenticationFailed(
        this.shop.shopId,
        authResponse,
      );
    }

    const expiryDate = new Date();
    const authBody = await authResponse.json() as {
      access_token?: string;
      expires_in?: number;
    } | undefined;

    if (
      typeof authBody?.access_token !== "string" ||
      typeof authBody?.expires_in !== "number"
    ) {
      throw new Error(
        `Shop ${this.shop.shopId} returned an invalid oauth reponse`,
      );
    }

    expiryDate.setSeconds(expiryDate.getSeconds() + authBody.expires_in);

    this.token = {
      expiryDate,
      content: authBody.access_token,
    };

    return this.token.content;
  }

  async getToken(): Promise<string> {
    if (
      !this.token || this.token.expiryDate.getTime() < (new Date()).getTime()
    ) {
      return await this.fetchToken();
    }

    return this.token.content;
  }

  async request(
    method: string,
    url: string,
    body: BodyInit,
    headers: Headers | undefined,
  ): Promise<Response> {
    headers ??= new Headers();

    headers.set("Authorization", `Bearer ${await this.getToken()}`);

    const response = await globalThis.fetch(
      `${this.shop.shopUrl}/api${url}`,
      {
        body,
        headers,
        method,
      },
    );

    // token expired while the request was in flight
    if (response.status === 401) {
      // force a new token to be fetched and then try again
      this.token = null;
      headers.set("Authorization", `Bearer ${await this.getToken()}`);

      return await globalThis.fetch(
        `${this.shop.shopUrl}/api${url}`,
        {
          body,
          headers,
          method,
        },
      );
    }

    if (!response.ok) {
      throw new ApiClientRequestFailed(
        this.shop.shopId,
        response,
      );
    }

    return response;
  }
}

export class ApiClientAuthenticationFailed extends Error {
  constructor(shopId: string, public response: Response) {
    super(`The api client authentication to shop with id: ${shopId} failed`);
  }
}

export class ApiClientRequestFailed extends Error {
  constructor(shopId: string, public response: Response) {
    super(
      `The api request failed with status code: ${response.status} for shop with id: ${shopId}`,
    );
  }
}
