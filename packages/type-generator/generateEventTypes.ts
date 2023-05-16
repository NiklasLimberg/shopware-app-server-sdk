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

import type { EntitySchema, EntityDefinition } from "./generateEntities.ts";
import { generateEntityInterface } from "./generateEntities.ts";

import ts from "npm:typescript";
import { toPascalCase } from "./shared.ts";

const transformedEntities: Map<string,  {
  type: ts.InterfaceDeclaration,
  name: string,
  pascalCaseName: string,
}> = new Map()
const availabaleEntities: Record<string, {schemaName: string, definition: EntityDefinition }> = {}

function getUnknownPropertySignature(propertySymbol: ts.Identifier) {
  return ts.factory.createPropertySignature(
    undefined,
    propertySymbol,
    undefined,
    ts.factory.createTypeReferenceNode("unknown"),
  );
}

function generateEventInterface(event: WebhookEvent) {
  const pascalCaseName = toPascalCase(event.name);
  const interfaceSymbol = ts.factory.createIdentifier(pascalCaseName);

  const interfaceMembers = Object.entries(event.data).map(([key, value]) => {
    const propertySymbol = ts.factory.createIdentifier(key);

    if (value.type === "object") {
      return getUnknownPropertySignature(propertySymbol)
    }

    if(value.type === "entity") {
      if(!value.entityClass) {
        console.log(`Property ${key} of ${event.name} has type entity but doesn't have an entityClass specified`)
        return getUnknownPropertySignature(propertySymbol);
      }

      const entityName = value.entityClass.split('\\').reverse()[0].replace('Definition', '')

      const entity = availabaleEntities[entityName]; 
      if(!entity) {
        console.log(`Entity ${entityName} is not in the entity schema`);
        return getUnknownPropertySignature(propertySymbol);
      }

      if(!transformedEntities.has(entityName)) {
        transformedEntities.set(entityName, generateEntityInterface(entity.schemaName, entity.definition, false))
      }

      return ts.factory.createPropertySignature(
        undefined,
        propertySymbol,
        undefined,
        ts.factory.createTypeReferenceNode(entityName),
      );
    } 

    if (value.type === "array") {
      if (!value.of) {
        throw new Error(
          `The element ${key} in ${event.name} does not have a type`,
        );
      }

      return ts.factory.createPropertySignature(
        undefined,
        propertySymbol,
        undefined,
        ts.factory.createTypeReferenceNode(`${value.of.type}[]`),
      );
    }

    return ts.factory.createPropertySignature(
      undefined,
      propertySymbol,
      undefined,
      ts.factory.createTypeReferenceNode(value.type),
    );
  });

  const messageType = ts.factory.createInterfaceDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    interfaceSymbol,
    undefined,
    undefined,
    interfaceMembers,
  );

  return {
    type: messageType,
    name: event.name,
    pascalCaseName,
  };
}

export function generateEventTypes(webHookEventsFile: string, entitySchemaPath: string) {
  const events = JSON.parse(
    Deno.readTextFileSync(webHookEventsFile),
  ) as WebhookEvent[];

  const entitySchema = JSON.parse(
    Deno.readTextFileSync(entitySchemaPath),
  ) as EntitySchema;

  Object.entries(entitySchema).forEach(([entityName, definition]) => {
    availabaleEntities[toPascalCase(entityName)] = {
      schemaName: entityName,
      definition
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
    ...Array.from(transformedEntities.values()).map(value => value.type),
    ...eventTypes.map((event) => event.type),
    ts.factory.createInterfaceDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      "Events",
      undefined,
      undefined,
      eventTypes.map((event) =>
        ts.factory.createPropertySignature(
          undefined,
          `'${event.name}'`,
          undefined,
          ts.factory.createTypeReferenceNode(event.pascalCaseName),
        )
      ),
    ),
  ].flatMap((value) => [value, ts.factory.createIdentifier("\n")]);

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  return printer.printList(
    ts.ListFormat.MultiLine,
    ts.factory.createNodeArray(
      nodes,
    ),
    sourceFile,
  );
}
