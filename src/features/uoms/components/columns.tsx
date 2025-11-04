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
];
