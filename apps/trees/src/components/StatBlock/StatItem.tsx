import { StatItem as StatItemType } from "../../types";
import "./StatItem.css";

function getColour({
  value,
  maxGood,
  minBad,
}: {
  value: number;
  maxGood: number;
  minBad: number;
}) {
  if (value < maxGood) {
    return "green";
  }

  if (value > minBad) {
    return "red";
  }
  return "amber";
}

function getPercentileColour({
  name,
  percentile75,
}: Pick<StatItemType, "name" | "percentile75">) {
  switch (name) {
    case "LCP": {
      return getColour({ value: percentile75, maxGood: 2500, minBad: 4000 });
    }
    case "FCP": {
      return getColour({ value: percentile75, maxGood: 1800, minBad: 3000 });
    }
    case "CLS": {
      return getColour({ value: percentile75, maxGood: 0.1, minBad: 0.25 });
    }
    case "TTFB": {
      return getColour({ value: percentile75, maxGood: 800, minBad: 1800 });
    }
    default:
      return "black";
  }
}

export function StatItem({ result }: { result: StatItemType }) {
  const { count, name, percentile75, standardDeviation } = result;

  const percentileColor = getPercentileColour({ name, percentile75 });

  return (
    <tr className="statItemTable">
      <td className="name">{name}</td>
      <td className="count">{count}</td>
      <td className={`percentile75 ${percentileColor}`}>
        {Math.round(percentile75 * 100) / 100}
      </td>
      <td className="standardDeviation">
        {Math.round(standardDeviation * 100) / 100}
      </td>
    </tr>
  );
}
