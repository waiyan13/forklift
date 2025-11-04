import { DataTable } from "@/components/data-table";

import { columns } from "@/features/uoms/components/columns";
import { useGetUoms } from "@/features/uoms/hooks/useGetUoms";

function UoMTable() {
  const { data } = useGetUoms();

  return <DataTable columns={columns} data={data!.content} />;
}

export default UoMTable;
