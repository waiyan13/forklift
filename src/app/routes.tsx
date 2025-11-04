/* oxlint-disable  eslint-plugin-react-perf/jsx-no-jsx-as-prop */
import { lazy } from "react";

import { Route } from "react-router";

// Layout
const BaseLayout = lazy(() => import("@/layouts/base-layout"));

// Pages
const DashboardPage = lazy(() => import("./pages/dashboard"));
const UomPage = lazy(() => import("./pages/uoms"));

function AppRoutes() {
  return (
    <Route element={<BaseLayout />}>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/settings">
        <Route path="measurement-units" element={<UomPage />} />
      </Route>
      <Route path="*" element={<DashboardPage />} />
    </Route>
  );
}

export default AppRoutes;
