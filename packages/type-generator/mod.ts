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

import ts from "npm:typescript";

const events = JSON.parse(
  Deno.readTextFileSync("./events.json"),
) as WebhookEvent[];

function toPascalCase(string: string) {
  return string.split(/-|_|\./g).map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join("");
}

function generateEventInterface(event: WebhookEvent) {
  const pascalCaseName = toPascalCase(event.name);
  const interfaceSymbol = ts.factory.createIdentifier(pascalCaseName);

  const interfaceMembers = Object.entries(event.data).map(([key, value]) => {
    const propertySymbol = ts.factory.createIdentifier(key);

    if (value.type === "entity" || value.type === "object") {
      return ts.factory.createPropertySignature(
        undefined,
        propertySymbol,
        undefined,
        ts.factory.createTypeReferenceNode("unknown"),
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
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)], // modifiers
    interfaceSymbol, // interface name
    undefined, // no generic type parameters
    undefined, // no heritage clauses (extends, implements)
    interfaceMembers, // interface attributes
  );

  return {
    type: messageType,
    name: event.name,
    pascalCaseName,
  };
}

const sourceFile = ts.createSourceFile(
  "someFileName.ts",
  "",
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS,
);

const eventTypes = events.map((event) => generateEventInterface(event));
const nodes = [
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

const result = printer.printList(
  ts.ListFormat.MultiLine,
  ts.factory.createNodeArray(
    nodes,
  ),
  sourceFile,
);

Deno.writeTextFileSync('../types/webhooks.d.ts', result);
