import { useQuery } from "@tanstack/react-query";

import { getItems } from "@/features/items/api";

function useGetItems() {
  return useQuery({
    queryKey: ["getItems"],
    queryFn: getItems,
  });
}

export { useGetItems };
