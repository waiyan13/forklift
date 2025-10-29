/* oxlint-disable  eslint-plugin-react-perf/jsx-no-jsx-as-prop */
import { lazy } from "react";

import { Route, Routes } from "react-router";

const BaseLayout = lazy(() => import("@/layouts/base-layout"));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />} />
    </Routes>
  );
}

export default AppRouter;
