import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { excludedReportPaths } from "./constants";
import { postmaster, reportWebVitals } from "./helpers";
import "./index.css";
import { DashboardPage } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { routes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {routes.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(async ({ id, name, value }) => {
  const path = window.location.pathname;
  console.log({ path, name, value });
  if (!excludedReportPaths.includes(path)) {
    await postmaster({ id, path, name, value });
  }
});
