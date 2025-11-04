import { Button } from "@/components/ui/button";
import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import NewUoMForm from "./new-uom-form";

function NewUomDrawer() {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>New Measurement Unit</DrawerTitle>
      </DrawerHeader>

      <NewUoMForm />

      <DrawerFooter>
        <Button form="new-uom-form" type="submit">
          Save
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
}

export default NewUomDrawer;
