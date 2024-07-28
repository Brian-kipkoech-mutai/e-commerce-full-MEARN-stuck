import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuBar from "./menuBar";
import { useState } from "react";
import Logo from "@/assets/logo";

function Header() {
  const [openSide, setOpenSide] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (openSide) {
      setOpenSide(false);
      setTimeout(() => setMenuOpen(false), 400);
    } else {
      setMenuOpen(true);
      setTimeout(() => setOpenSide(true), 400);
    }
  };

  return (
    <header className="space-y-2">
      <section className="bg-gray-800 flex items-center justify-center text-white p-1">
        Get 25% OFF on your first order.
      </section>
      <section className="flex items-center justify-between">
        <section className="font-semibold text-lg flex items-center text-gray-800 gap-2 px-4">
          <Logo />
          <span>Trend Hive</span>
        </section>
        <section className="invisible">hello</section>
        <section className="flex items-center pr-2">
          <Sheet open={openSide} onOpenChange={toggleMenu}>
            <SheetTrigger>
              <MenuBar {...{ isMenuOpen, toggleMenu }} />
            </SheetTrigger>
            <SheetContent side={"right"}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </section>
      </section>
      <section className=""></section>
    </header>
  );
}

export default Header;
