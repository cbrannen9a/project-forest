import { Stat } from "../../types";
import "./StatBlock.css";
import { StatItem } from "./StatItem";

export function StatBlock({ stat }: { stat: Stat }) {
  const { results, example, variant } = stat;
  return (
    <div>
      <h3>{example}</h3>
      <h4>{variant}</h4>
      <table className="statBlockTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Percentile 75</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {results
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((result) => (
              <StatItem key={result.name} result={result} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
