import { Button } from "@/components/ui/button";
import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import NewItemForm from "./new-item-form";

function NewUomDrawer() {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>New Item</DrawerTitle>
      </DrawerHeader>

      <NewItemForm />

      <DrawerFooter>
        <Button form="new-item-form" type="submit">
          Save
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
}

export default NewUomDrawer;
