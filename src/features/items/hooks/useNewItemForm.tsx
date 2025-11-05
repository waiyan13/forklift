import { useForm } from "react-hook-form";

function useNewItemForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      unit: "",
    },
  });

  return form;
}

export { useNewItemForm };
