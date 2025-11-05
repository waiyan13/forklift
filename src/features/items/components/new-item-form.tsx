import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useNewItemForm } from "@/features/items/hooks/useNewItemForm";

const sleep = () => new Promise((resolve) => setTimeout(() => resolve, 1000));

function NewItemForm() {
  const form = useNewItemForm();
  const { control, handleSubmit } = form;

  const onNewItemSubmit = async () => {
    await sleep();
  };

  return (
    <Form {...form}>
      <form id="new-item-form" onSubmit={handleSubmit(onNewItemSubmit)}>
        <div className="flex flex-col space-y-4 px-4">
          <FormField
            control={control}
            name="name"
            //oxlint-disable-next-line eslint-plugin-react-perf/jsx-no-new-function-as-prop
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
          <FormField
            control={control}
            name="unit"
            //oxlint-disable-next-line eslint-plugin-react-perf/jsx-no-new-function-as-prop
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
        </div>
      </form>
    </Form>
  );
}

export default NewItemForm;
