import { Example1 } from "./pages/Example1";
import { Example2 } from "./pages/Example2";

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
];
