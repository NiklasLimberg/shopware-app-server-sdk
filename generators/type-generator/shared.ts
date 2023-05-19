export function toPascalCase(string: string) {
  return string.split(/-|_|\./g).map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join("");
}
