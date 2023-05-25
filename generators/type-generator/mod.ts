import { generateEventTypes } from "./generateEventTypes.ts";
import { generateEntityTypes } from "./generateEntities.ts";

Deno.writeTextFileSync(
  "../../packages/types/webhooks.d.ts",
  generateEventTypes("./events.json", "./entity-schema.json"),
);
Deno.writeTextFileSync(
  "../../packages/types/entities.d.ts",
  generateEntityTypes("./entity-schema.json"),
);
