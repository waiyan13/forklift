import { httpClient } from "@/lib/http";

import type { PaginatedResponse } from "@/types";
import type { UoMResponse } from "@/types/uom";
import type { HTTPError } from "ky";

async function getUoMs(): Promise<PaginatedResponse<UoMResponse>> {
  try {
    const response = await httpClient
      .get<PaginatedResponse<UoMResponse>>("uoms")
      .json();
    return response;
  } catch (error) {
    throw new Error((error as HTTPError).message, { cause: error });
  }
}

export { getUoMs };
