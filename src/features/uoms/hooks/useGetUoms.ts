import { useSuspenseQuery } from "@tanstack/react-query";

import { getUoMs } from "@/features/uoms/api";

function useGetUoms() {
  return useSuspenseQuery({ queryKey: ["getUoMs"], queryFn: getUoMs });
}

export { useGetUoms };
