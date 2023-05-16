import { generateEventTypes } from "./generateEventTypes.ts";
import { generateEntityTypes } from "./generateEntities.ts";


Deno.writeTextFileSync("../types/webhooks.d.ts", generateEventTypes("./events.json", "./entity-schema.json"));
Deno.writeTextFileSync("../types/entitys.d.ts", generateEntityTypes("./entity-schema.json"));
