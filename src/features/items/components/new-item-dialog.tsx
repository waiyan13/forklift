import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import NewItemForm from "./new-item-form";

function NewItemDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Item</DialogTitle>
      </DialogHeader>
      <NewItemForm />
      <DialogFooter>
        <Button className="mr-4" form="new-item-form" type="submit">
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default NewItemDialog;
