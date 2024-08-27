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
      <Link to="/">Home</Link>
      <div>Dashboard</div>
      <Dashboard />
    </QueryClientProvider>
  );
}

function Dashboard() {
  // Queries
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery<Stat[]>({
    queryKey: ["stats"],
    queryFn: () => fetch("http://localhost:8000").then((res) => res.json()),
  });
  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // to handle error
  if (error || !stats) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <>
      {stats.map((stat) => (
        <StatBlock key={stat.path} stat={stat} />
      ))}
    </>
  );
}
