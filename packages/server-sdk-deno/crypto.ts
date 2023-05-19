const textEncoder = new TextEncoder();
const keyCache = new Map<string, CryptoKey>();

function bufferToHex(buf: ArrayBuffer) {
  const intArray = new Uint8Array(buf);

  return intArray.reduce(
    (accumaltor, x) => (accumaltor + ("00" + x.toString(16)).slice(-2)),
    "",
  );
}

export async function getKeyForSecret(secret: string) {
  const cachedCryptoKey = keyCache.get(secret);

  if (cachedCryptoKey) {
    return cachedCryptoKey;
  }

  const secretKeyData = textEncoder.encode(secret);
  const key = await crypto.subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );

  keyCache.set(secret, key);

  return key;
}

export async function sign(message: string, secret: string) {
  const key = await getKeyForSecret(secret);

  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    textEncoder.encode(message),
  );

  return bufferToHex(mac);
}

export async function verify(signature: string, data: string, secret: string) {
  const signed = await sign(data, secret);

  return signed === signature;
}

export function randomString() {
  return crypto.randomUUID().replaceAll("-", "").substring(0, 21);
}
