import { setupWorker } from "msw/browser";

import { handlers as uoMHandlers } from "./handlers/uom";

export const worker = setupWorker(...uoMHandlers);
