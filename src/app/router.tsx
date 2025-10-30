/* oxlint-disable  eslint-plugin-react-perf/jsx-no-jsx-as-prop */
import { lazy } from "react";

import { Route, Routes } from "react-router";

import AppRoutes from "./routes";

// Pages
const LandingPage = lazy(() => import("./pages/landing"));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {AppRoutes()}
    </Routes>
  );
}

export default AppRouter;
