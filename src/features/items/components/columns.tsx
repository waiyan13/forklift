import { EllipsisVertical } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
    cell: (info) => <Badge>{info.getValue() as string}</Badge>,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    meta: { align: "right" },
  },
  {
    accessorKey: "unitCost",
    header: "Unit Cost",
    meta: { align: "right" },
    cell: (info) => {
      const currency = (info.getValue() as string).split(" ");
      return (
        <>
          <span className="tabular-nums">{currency[0]}</span>&nbsp;
          <span className="text-foreground/70">{currency[1]}</span>
        </>
      );
    },
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
