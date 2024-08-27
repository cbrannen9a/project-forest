import { Link } from "react-router-dom";
import { routes } from "../routes";

export function Home() {
  return (
    <div>
      Home
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
