type WebhookEvent = {
  name: string;
  class: string;
  data: Record<
    string,
    { type: string; entityClass?: string; of?: { type: string } }
  >;
  aware: string[];
  extensions: [];
};

import type { EntityDefinition, EntitySchema } from "./generateEntities.ts";
import { generateEntityInterface } from "./generateEntities.ts";



import ts from "npm:typescript";
const factory = ts.factory;


import { toPascalCase } from "./shared.ts";

const transformedEntities: Map<string, {
  type: ts.InterfaceDeclaration;
  name: string;
  pascalCaseName: string;
}> = new Map();
const availableEntities: Record<
  string,
  { schemaName: string; definition: EntityDefinition }
> = {};

function getUnknownPropertySignature(propertySymbol: ts.Identifier) {
  return factory.createTypeLiteralNode([factory.createPropertySignature(
    undefined,
    propertySymbol,
    undefined,
    factory.createTypeReferenceNode("unknown"),
  )]);
}

function generateEventInterface(event: WebhookEvent) {
  const pascalCaseName = toPascalCase(event.name);
  const interfaceSymbol = factory.createIdentifier(pascalCaseName);

  const interfaceMembers = Object.entries(event.data).map(([key, value]) => {
    const propertySymbol = factory.createIdentifier(key);

    if (value.type === "object") {
      return getUnknownPropertySignature(propertySymbol);
    }

    if (value.type === "entity") {
      if (!value.entityClass) {
        console.log(
          `Property ${key} of ${event.name} has type entity but doesn't have an entityClass specified`,
        );
        return getUnknownPropertySignature(propertySymbol);
      }

      const entityName = value.entityClass.split("\\").reverse()[0].replace(
        "Definition",
        "",
      );

      const entity = availableEntities[entityName];
      if (!entity) {
        console.log(`Entity ${entityName} is not in the entity schema`);
        return getUnknownPropertySignature(propertySymbol);
      }

      if (!transformedEntities.has(entityName)) {
        transformedEntities.set(
          entityName,
          generateEntityInterface(entity.schemaName, entity.definition, false),
        );
      }

      return factory.createTypeLiteralNode([
        factory.createPropertySignature(
          undefined,
          factory.createIdentifier("entity"),
          undefined,
          factory.createLiteralTypeNode(factory.createStringLiteral(entityName))
        ),
        factory.createPropertySignature(
          undefined,
          factory.createIdentifier("operation"),
          undefined,
          factory.createUnionTypeNode([
            factory.createLiteralTypeNode(factory.createStringLiteral("create")),
            factory.createLiteralTypeNode(factory.createStringLiteral("read")),
            factory.createLiteralTypeNode(factory.createStringLiteral("update")),
            factory.createLiteralTypeNode(factory.createStringLiteral("delete"))
          ])
        ),
        factory.createPropertySignature(
          undefined,
          factory.createIdentifier("primaryKey"),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
        factory.createPropertySignature(
          undefined,
          factory.createIdentifier("updatedFields"),
          undefined,
          factory.createTypeReferenceNode(
            factory.createIdentifier("CustomerRecovery"),
            undefined
          )
        )
      ])
    }

    if (value.type === "array") {
      if (!value.of) {
        throw new Error(
          `The element ${key} in ${event.name} does not have a type`,
        );
      }

      return factory.createTypeLiteralNode([ factory.createPropertySignature(
        undefined,
        propertySymbol,
        undefined,
        factory.createTypeReferenceNode(`${value.of.type}[]`),
      )]);
    }

    return factory.createTypeLiteralNode([factory.createPropertySignature(
      undefined,
      propertySymbol,
      undefined,
      factory.createTypeReferenceNode(value.type),
    )]);
  });

  const messageType = factory.createInterfaceDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    interfaceSymbol,
    undefined,
    undefined,
    [
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("data"),
        undefined,
        factory.createTypeLiteralNode([
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("payload"),
            undefined,
            interfaceMembers,
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("event"),
            undefined,
            factory.createLiteralTypeNode(
              factory.createStringLiteral(event.name),
            ),
          ),
        ]),
      ),
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("source"),
        undefined,
        factory.createTypeLiteralNode([
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("url"),
            undefined,
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("eventId"),
            undefined,
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("appVersion"),
            undefined,
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("shopId"),
            undefined,
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ),
        ]),
      ),
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("timestamp"),
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      ),
    ],
  );

  return {
    type: messageType,
    name: event.name,
    pascalCaseName,
  };
}

export function generateEventTypes(
  webHookEventsFile: string,
  entitySchemaPath: string,
) {
  const events = JSON.parse(
    Deno.readTextFileSync(webHookEventsFile),
  ) as WebhookEvent[];

  const entitySchema = JSON.parse(
    Deno.readTextFileSync(entitySchemaPath),
  ) as EntitySchema;

  Object.entries(entitySchema).forEach(([entityName, definition]) => {
    availableEntities[toPascalCase(entityName)] = {
      schemaName: entityName,
      definition,
    };
  });

  const sourceFile = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
  );

  const eventTypes = events.map((event) => generateEventInterface(event));
  const nodes = [
    ...Array.from(transformedEntities.values()).map((value) => value.type),
    ...eventTypes.map((event) => event.type),
    factory.createInterfaceDeclaration(
      [factory.createToken(ts.SyntaxKind.ExportKeyword)],
      "Events",
      undefined,
      undefined,
      eventTypes.map((event) =>
        factory.createPropertySignature(
          undefined,
          `"${event.name}"`,
          undefined,
          factory.createTypeReferenceNode(event.pascalCaseName),
        )
      ),
    ),
  ].flatMap((value) => [value, factory.createIdentifier("\n")]);

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  return printer.printList(
    ts.ListFormat.MultiLine,
    factory.createNodeArray(
      nodes,
    ),
    sourceFile,
  );
}
