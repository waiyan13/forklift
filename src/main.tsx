import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import App from "./app/app";
// oxlint-disable-next-line eslint-plugin-import/no-unassigned-import
import "./index.css";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

// oxlint-disable-next-line eslint-plugin-promise/always-return
enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
