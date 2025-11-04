import { HttpResponse, delay, http } from "msw";

import type { PaginatedResponse } from "@/types";
import type { UoMResponse } from "@/types/uom";

export const handlers = [
  http.get<never, never, PaginatedResponse<UoMResponse>>(
    /api\/uoms/,
    async () => {
      await delay(1000);
      return HttpResponse.json({
        content: [
          { unit: "g", name: "gram" },
          { unit: "kg", name: "kilogram" },
          { unit: "L", name: "litre" },
          { unit: "mL", name: "millilitre" },
        ],
        page: 0,
        size: 10,
        totalElements: 4,
        totalPages: 1,
        isLast: true,
      });
    },
  ),
];
