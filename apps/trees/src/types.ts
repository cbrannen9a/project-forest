export interface Stat {
  path: string;
  example: string;
  variant: string;
  results: StatItem[];
}

export interface StatItem {
  count: number;
  name: "TTFB" | "FCP" | "CLS" | "LCP" | "FID";
  percentile75: number;
  standardDeviation: number;
}
