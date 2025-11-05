import { Suspense } from "react";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import { columns } from "@/features/items/components/columns";
import ItemHeader from "@/features/items/components/header";
import ItemTable from "@/features/items/components/table";
import { DataTableError } from "@/components/data-table-error";
import { DataTableSkeleton } from "@/components/data-table-skeleton";

function ItemPage() {
  return (
    <div className="flex w-full flex-col space-y-4">
      <ItemHeader />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            // oxlint-disable-next-line  eslint-plugin-react-perf/jsx-no-new-function-as-prop
            fallbackRender={() => (
              // oxlint-disable-next-line  eslint-plugin-react-perf/jsx-no-new-array-as-prop
              <DataTableError columns={columns} data={[]} />
            )}
            onReset={reset}
          >
            <Suspense
              // oxlint-disable-next-line eslint-plugin-react-perf/jsx-no-new-array-as-prop, eslint-plugin-react-perf/jsx-no-jsx-as-prop
              fallback={<DataTableSkeleton columns={columns} data={[]} />}
            >
              <ItemTable />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

export default ItemPage;
