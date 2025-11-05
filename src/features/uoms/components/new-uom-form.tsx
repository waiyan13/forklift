import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useNewUoMForm } from "@/features/uoms/hooks/useNewUoMForm";

const sleep = () => new Promise((resolve) => setTimeout(() => resolve, 1000));

function NewUoMForm() {
  const form = useNewUoMForm();
  const { control, handleSubmit } = form;

  const onNewUoMSubmit = async () => {
    await sleep();
  };

  return (
    <Form {...form}>
      <form id="new-uom-form" onSubmit={handleSubmit(onNewUoMSubmit)}>
        <div className="flex flex-col space-y-4 px-4">
          <FormField
            control={control}
            name="unit"
            // oxlint-disable-next-line eslint-plugin-react-perf/jsx-no-new-function-as-prop
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="name"
            // oxlint-disable-next-line eslint-plugin-react-perf/jsx-no-new-function-as-prop
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

export default NewUoMForm;
