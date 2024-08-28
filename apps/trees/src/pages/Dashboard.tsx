import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { StatBlock } from "../components";
import { Stat } from "../types";

const queryClient = new QueryClient();

export function DashboardPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Link to="/">Back</Link>
      <h2>Dashboard</h2>
      <Dashboard />
    </QueryClientProvider>
  );
}

function Dashboard() {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery<Stat[]>({
    queryKey: ["stats"],
    queryFn: () => fetch("http://localhost:8000").then((res) => res.json()),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error || !stats) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <>
      {stats
        .sort((a, b) => a.path.localeCompare(b.path))
        .map((stat) => (
          <StatBlock key={stat.path} stat={stat} />
        ))}
    </>
  );
}
