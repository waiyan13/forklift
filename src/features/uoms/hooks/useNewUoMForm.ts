import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { getNewUoMSchema } from "./getNewUoMSchema";

import type { NewUoMSchema } from "./getNewUoMSchema";

function useNewUoMForm() {
  const form = useForm<NewUoMSchema>({
    resolver: zodResolver(getNewUoMSchema()),
    defaultValues: {
      unit: "",
      name: "",
    },
  });

  return form;
}

export { useNewUoMForm };
