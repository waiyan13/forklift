/* oxlint-disable  eslint-plugin-react-perf/jsx-no-jsx-as-prop */
import { lazy } from "react";

import { Route } from "react-router";

// Layout
const BaseLayout = lazy(() => import("@/layouts/base-layout"));

// Pages
const DashboardPage = lazy(() => import("./pages/dashboard"));

function AppRoutes() {
  return (
    <Route element={<BaseLayout />}>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Route>
  );
}

export default AppRoutes;
