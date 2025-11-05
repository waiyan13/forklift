import { useMediaQuery } from "@uidotdev/usehooks";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";

import NewItemDialog from "./new-item-dialog";
import NewUomDrawer from "./new-item-drawer";

function UomHeader() {
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center">
      <h1 className="text-xl">Items</h1>
      {isDesktop ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              New Item
              <Plus />
            </Button>
          </DialogTrigger>
          <NewItemDialog />
        </Dialog>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full">
              New Item
              <Plus />
            </Button>
          </DrawerTrigger>
          <NewUomDrawer />
        </Drawer>
      )}
    </div>
  );
}

export default UomHeader;
