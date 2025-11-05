import { DataTable } from "@/components/data-table";
import { useGetItems } from "@/features/items/hooks/useGetItems";

import { columns } from "./columns";

function ItemsTable() {
  const { data } = useGetItems();

  return <DataTable columns={columns} data={data!.content} />;
}

export default ItemsTable;
