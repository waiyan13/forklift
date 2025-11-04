import { useMediaQuery } from "@uidotdev/usehooks";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";

import NewUoMDialog from "./new-uom-dialog";
import NewUomDrawer from "./new-uom-drawer";

function UomHeader() {
  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center">
      <h1 className="text-xl">Measurement Units</h1>
      {isDesktop ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              New Unit
              <Plus />
            </Button>
          </DialogTrigger>
          <NewUoMDialog />
        </Dialog>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full">
              New Unit
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
