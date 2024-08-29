import { ControlA } from "./pages/Control/A";
import { Example1A } from "./pages/Example1/A";
import { Example1B } from "./pages/Example1/B";
import { Example2A } from "./pages/Example2/A";
import { Example2B } from "./pages/Example2/B";
import { Example2C } from "./pages/Example2/C";
import { Example2D } from "./pages/Example2/D";

export const routes = [
  {
    name: "Control A",
    path: "/control/a",
    element: <ControlA />,
  },
  {
    name: "Example 1a",
    path: "/example-1/a",
    element: <Example1A />,
  },
  {
    name: "Example 1b",
    path: "/example-1/b",
    element: <Example1B />,
  },
  {
    name: "Example 2a",
    path: "/example-2/a",
    element: <Example2A />,
  },
  {
    name: "Example 2b",
    path: "/example-2/b",
    element: <Example2B />,
  },
  { name: "Example 2c", path: "/example-2/c", element: <Example2C /> },
  { name: "Example 2d", path: "/example-2/d", element: <Example2D /> },
];
