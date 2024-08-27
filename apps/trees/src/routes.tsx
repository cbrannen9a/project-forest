import { Example1 } from "./pages/Example1";
import { Example2 } from "./pages/Example2";
import { Example3 } from "./pages/Example3";
import { Example4 } from "./pages/Example4";

export const routes = [
  {
    name: "Example 1",
    path: "/example-1",
    element: <Example1 />,
  },
  {
    name: "Example 2",
    path: "/example-2",
    element: <Example2 />,
  },
  {
    name: "Example 3",
    path: "/example-3",
    element: <Example3 />,
  },
  {
    name: "Example 4",
    path: "/example-4",
    element: <Example4 />,
  },
];
