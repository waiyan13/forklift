import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { DataTableProps } from "@/types/table";

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-md border">
      <Table className="min-w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="bg-amber-600/10" key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <TableHead
                  className={cn(
                    "text-foreground/70 text-lg",
                    header.column.columnDef.meta?.className ?? "",
                    header.column.columnDef.meta?.align === "right"
                      ? "text-right"
                      : "",
                    index === 0 ? "sticky left-0 z-1 bg-[#f7ebe0]" : "",
                  )}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  className={cn(
                    "text-md",
                    cell.column.columnDef.meta?.className ?? "",
                    cell.column.columnDef.meta?.align === "right"
                      ? "text-right"
                      : "",
                    index === 0
                      ? "sticky left-0 z-1 bg-background/80 backdrop-blur hover:bg-muted/50 md:bg-background md:backdrop-blur-none"
                      : "",
                  )}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { DataTable };
