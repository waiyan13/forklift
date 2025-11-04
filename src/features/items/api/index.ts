import { httpClient } from "@/lib/http";

import type { PaginatedResponse } from "@/types";
import type { ItemResponse } from "@/types/item";
import type { HTTPError } from "ky";

async function getItems(): Promise<PaginatedResponse<ItemResponse>> {
  try {
    const response = await httpClient
      .get<PaginatedResponse<ItemResponse>>("items")
      .json();
    return response;
  } catch (error) {
    throw new Error((error as HTTPError).message, { cause: error });
  }
}

export { getItems };
