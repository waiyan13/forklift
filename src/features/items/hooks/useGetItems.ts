import { useSuspenseQuery } from "@tanstack/react-query";

import { getItems } from "@/features/items/api";

import type { PaginatedResponse } from "@/types";
import type { ItemColumns } from "@/features/items/components/columns";
import type { ItemResponse } from "@/types/item";

function useGetItems() {
  return useSuspenseQuery<
    PaginatedResponse<ItemResponse>,
    Error,
    PaginatedResponse<ItemColumns>
  >({
    queryKey: ["getItems"],
    queryFn: getItems,
    select: ({ content, ...rest }) => ({
      ...rest,
      content: content.map(({ unit, currency, ...item }) => ({
        ...item,
        quantity: `${item.quantity} ${unit}`,
        unitCost: `${item.unitCost.toFixed(2)} ${currency}`,
      })),
    }),
  });
}

export { useGetItems };
