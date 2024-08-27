export function parseLogs<
  T extends { name: string; path: string; value: number }
>(data: string) {
  const result: T[] = [];
  const lines = data.split(",\n");

  lines.forEach((line) => {
    try {
      const jsonData = JSON.parse(line);
      result.push(jsonData);
    } catch (error) {
      console.error(`Error parsing JSON line: ${line}`);
    }
  });

  return result;
}
