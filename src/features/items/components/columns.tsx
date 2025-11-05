import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { ColumnDef } from "@tanstack/react-table";
import type { ItemResponse } from "@/types/item";

export type ItemColumns = Omit<
  ItemResponse,
  "quantity" | "unit" | "currency" | "unitCost"
> & {
  quantity: string;
  unitCost: string;
};

export const columns: ColumnDef<ItemColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "unitCost",
    header: "Unit Cost",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
  {
    id: "actions",
    header: "Actions",
    meta: { align: "right", className: "w-0 whitespace-nowrap text-right" },
    cell: () => (
      <Button size="icon" variant="ghost">
        <EllipsisVertical />
      </Button>
    ),
  },
];
