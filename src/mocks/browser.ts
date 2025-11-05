import { setupWorker } from "msw/browser";

import { handlers as itemHanders } from "./handlers/item";
import { handlers as uoMHandlers } from "./handlers/uom";

export const worker = setupWorker(...itemHanders, ...uoMHandlers);
