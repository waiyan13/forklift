import { DataTable } from "@/components/data-table";

import { columns } from "./columns";
import { useGetItems } from "./hooks/useGetItems";

function ItemsTable() {
  const { data } = useGetItems();
  const transFormedData =  data!.content.map(({ unit, currency, ...rest }) => ({
    ...rest,
    quantity: `${rest.quantity} ${unit}`,
    unitCost: `${currency} ${rest.unitCost}`,
  }));

  return (
    <DataTable columns={columns} data={transFormedData} />
  );
}

export default ItemsTable;
