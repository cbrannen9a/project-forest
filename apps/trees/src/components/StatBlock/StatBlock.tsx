import { Stat } from "../../types";
import { StatItem } from "./StatItem";

export function StatBlock({ stat }: { stat: Stat }) {
  const { path, results } = stat;
  return (
    <div>
      {path}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Percentile 75</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <StatItem key={result.name} result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
