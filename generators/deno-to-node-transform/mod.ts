// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.34.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./packages/shopware-app-server-sdk/mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
    crypto: true,
    undici: true,
  },
  package: {
    // package.json properties
    name: "shopware-app-server-sdk",
    version: Deno.args[0],
    description: "shopware app server sdk for node",
    license: "MIT",
    repository: {
      type: "git",
      url: "git@github.com:NiklasLimberg/shopware-app-server-sdk.git",
    },
    bugs: {
      url: "https://github.com/NiklasLimberg/shopware-app-server-sdk/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});