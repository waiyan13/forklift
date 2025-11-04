import ky from "ky";

import { API_URL } from "@/config";

export const httpClient = ky.create({
  prefixUrl: `${API_URL}/api`,
  headers: { "content-type": "application/json", accept: "application/json" },
});
