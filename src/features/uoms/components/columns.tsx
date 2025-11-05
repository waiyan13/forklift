import { EllipsisVertical } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { ColumnDef } from "@tanstack/react-table";
import type { UoMResponse } from "@/types/uom";

export const columns: ColumnDef<UoMResponse>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "unit",
    header: "Unit",
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
