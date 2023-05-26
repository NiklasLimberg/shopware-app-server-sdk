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
const factory = ts.factory;

import { toPascalCase } from "./shared.ts";

function generateEventInterface(event: WebhookEvent) {
  const pascalCaseName = toPascalCase(event.name);
  const interfaceSymbol = factory.createIdentifier(pascalCaseName);

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
            factory.createTypeReferenceNode("unknown"),
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
) {
  const events = JSON.parse(
    Deno.readTextFileSync(webHookEventsFile),
  ) as WebhookEvent[];

  const sourceFile = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
  );

  const eventTypes = events.map((event) => generateEventInterface(event));
  const nodes = [
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
