import { HttpResponse, delay, http } from "msw";

import type { PaginatedResponse } from "@/types";
import type { ItemResponse } from "@/types/item";

export const handlers = [
  http.get<never, never, PaginatedResponse<ItemResponse>>(
    /api\/items/,
    async () => {
      await delay(1000);
      return HttpResponse.json({
        content: [
          {
            name: "All Purpose Flour",
            sku: "001",
            category: "dry goods",
            quantity: 10,
            unit: "kg",
            unitCost: 0.2,
            currency: "THB",
            supplier: "Lotus",
          },
          {
            name: "Garlic",
            sku: "002",
            category: "vegetable",
            quantity: 300,
            unit: "g",
            unitCost: 1.4,
            currency: "THB",
            supplier: "Local Market",
          },
          {
            name: "Olive Oil",
            sku: "003",
            category: "cooking oil",
            quantity: 10,
            unit: "L",
            unitCost: 0.2,
            currency: "THB",
            supplier: "Tops",
          },
          {
            name: "Balsamic Vinegar",
            sku: "004",
            category: "vinegar",
            quantity: 3,
            unit: "L",
            unitCost: 20,
            currency: "THB",
            supplier: "Lotus",
          },
          {
            name: "Mackerel",
            sku: "005",
            category: "fish",
            quantity: 500,
            unit: "g",
            unitCost: 10,
            currency: "THB",
            supplier: "Local Market",
          },
        ],
        page: 0,
        size: 10,
        totalElements: 5,
        totalPages: 1,
        isLast: true,
      });
    },
  ),
];
