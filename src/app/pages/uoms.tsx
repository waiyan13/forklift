import { Suspense } from "react";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import { columns } from "@/features/uoms/components/columns";
import UomHeader from "@/features/uoms/components/header";
import UoMTable from "@/features/uoms/components/table";
import { DataTableError } from "@/components/data-table-error";
import { DataTableSkeleton } from "@/components/data-table-skeleton";

function UoMPage() {
  return (
    <div className="mx-auto flex w-2/3 flex-col space-y-4">
      <UomHeader />
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
              <UoMTable />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

export default UoMPage;
