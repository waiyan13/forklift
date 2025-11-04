import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import NewUoMForm from "./new-uom-form";

function NewUoMDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Measurement Unit</DialogTitle>
      </DialogHeader>
      <NewUoMForm />
      <DialogFooter>
        <Button form="new-uom-form" type="submit">
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default NewUoMDialog;
