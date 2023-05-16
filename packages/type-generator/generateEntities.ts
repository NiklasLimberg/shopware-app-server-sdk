type readProtected = readonly string[];
type writeProtected = readonly string[];

interface PropertyFlags {
  primary_key?: boolean;
  required?: boolean;
  read_protected?: readonly readProtected[];
  write_protected?: readonly writeProtected[];
  cascade_delete?: boolean;
  translatable?: boolean;
  computed?: boolean;
  allow_html?: boolean;
  restrict_delete?: boolean;
  search_ranking?: number;
  runtime?: boolean;
  set_null_on_delete?: boolean;
  inherited?: boolean;
  deprecated?: unknown;
  reversed_inherited?: string;
  extension?: boolean;
}

type PropertyTypes =
  | "boolean"
  | "string"
  | "uuid"
  | "date"
  | "text"
  | "json_list"
  | "association"
  | "blob"
  | "json_object"
  | "int"
  | "float"
  | "password"
  | "Shopware\\Core\\Framework\\DataAbstractionLayer\\Field\\RemoteAddressField";

type Relations =
  | "one_to_one"
  | "many_to_one"
  | "one_to_many"
  | "many_to_many";

interface Property {
  type: PropertyTypes;
  flags: PropertyFlags | readonly [];
  relation?: Relations;
  entity?: string;
}

interface Properties {
  [key: string]: Property;
}

export interface EntityDefinition {
  entity: string;
  properties: Properties;
}

export interface EntitySchema {
  [key: string]: EntityDefinition;
}

import ts from "npm:typescript";
import { toPascalCase } from "./shared.ts";

function hydrateAssociation(property: Property): string {
  // Handle notification separately because there is no entity for it
  if (property.entity === "notification") {
    return "unknown";
  }

  if (property.relation && property.entity) {
    if (["one_to_one", "many_to_one"].includes(property.relation)) {
      return `Entities['${property.entity}'] | undefined`;
    }

    if (["one_to_many", "many_to_many"].includes(property.relation)) {
      return `Entities['${property.entity}'][] | undefined`;
    }
  }

  return "unknown";
}

function convertPropertyType(
  propertyKey: string,
  propertyType: string,
  definition: EntityDefinition,
): string {
  if (propertyKey === "translated") {
    const translatableFields = Object.entries(definition.properties).filter(
      ([_, propertyInfos]) => {
        if (propertyInfos.flags instanceof Array) {
          return false;
        }

        return propertyInfos.flags.translatable;
      },
    ).map(([propertyKey]) => {
      const propertyType = definition.properties[propertyKey].type;

      return `${propertyKey}?: ${
        convertPropertyType(propertyKey, propertyType, definition)
      }`;
    });

    return "{" + translatableFields.join(", ") + "}";
  }

  switch (propertyType) {
    case "boolean":
      return "boolean";

    case "string":
    case "uuid": // could be more explicit with an UUID type
    case "date": // could be more explicit with an date type
    case "text":
    case "password":
    case "blob":
      return "string";

    case "json_list":
      return "Array<unknown>";

    case "json_object":
      return "unknown";

    case "int":
    case "float":
      return "number";

    default:
      return "unknown";
  }
}

export function generateEntityInterface(
  entityName: string,
  entityDefinition: EntityDefinition,
  hydrateAssociations = true,
) {
  const pascalCaseName = toPascalCase(entityName);
  const interfaceSymbol = ts.factory.createIdentifier(pascalCaseName);

  const properties = Object.entries(entityDefinition.properties).map((
    [key, property],
  ) => ({ key, ...property }));

  const interfaceMembers = properties.reduce((accumulator, property) => {
    const isAssosiation = property.type === "association";

    if (!hydrateAssociations && isAssosiation) {
      return accumulator;
    }

    const propertySymbol = ts.factory.createIdentifier(property.key);

    accumulator.push(ts.factory.createPropertySignature(
      undefined,
      propertySymbol,
      undefined,
      ts.factory.createTypeReferenceNode(
        isAssosiation
          ? hydrateAssociation(property)
          : convertPropertyType(property.key, property.type, entityDefinition),
      ),
    ));

    return accumulator;
  }, [] as ts.PropertySignature[]);

  const messageType = ts.factory.createInterfaceDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    interfaceSymbol,
    undefined,
    undefined,
    interfaceMembers,
  );

  return {
    type: messageType,
    name: entityName,
    pascalCaseName,
  };
}

export function generateEntityTypes(entitySchemaPath: string) {
  const entitySchema = JSON.parse(
    Deno.readTextFileSync(entitySchemaPath),
  ) as EntitySchema;

  const sourceFile = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
  );

  const eventTypes = Object.entries(entitySchema).map((
    [entityName, entityDefinition],
  ) => generateEntityInterface(entityName, entityDefinition));
  const nodes = [
    ...eventTypes.map((event) => event.type),
    ts.factory.createInterfaceDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      "Entities",
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

  return "/* THIS FILE IS AUTO GENERATED AND SHOULDN'T BE MODIFIED MANUALLY */\n\n" +
    printer.printList(
      ts.ListFormat.MultiLine,
      ts.factory.createNodeArray(
        nodes,
      ),
      sourceFile,
    );
}
