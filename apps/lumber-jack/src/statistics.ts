import SimpleStatistics from "simple-statistics";

export function calculateStats<
  T extends { name: string; path: string; value: number }
>(data: T[]) {
  // Group by path and name
  const groupedData = data.reduce((acc, cur) => {
    const pathKey = cur.path;
    const nameKey = cur.name;

    if (!acc[pathKey]) {
      acc[pathKey] = {};
    }

    if (!acc[pathKey][nameKey]) {
      acc[pathKey][nameKey] = { values: [], count: 0 };
    }

    acc[pathKey][nameKey].values.push(cur.value);
    acc[pathKey][nameKey].count++;
    return acc;
  }, {} as Record<string, Record<string, { values: number[]; count: number }>>);

  // Calculate 75th percentile and standard deviation for each group
  const results = Object.entries(groupedData).map(([path, nameGroups]) => {
    const urlParts = path.split("/");
    return {
      path,
      example: urlParts?.[1],
      variant: urlParts?.[2],
      results: Object.entries(nameGroups).map(([name, { values, count }]) => {
        return {
          name,
          count,
          percentile75: SimpleStatistics.quantile(values, 0.75),
          standardDeviation: SimpleStatistics.standardDeviation(values),
        };
      }),
    };
  });

  return results;
}
