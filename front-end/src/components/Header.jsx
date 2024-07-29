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
import { NavLink } from "react-router-dom";
import Categories from "./categories";
import { motion } from "framer-motion";

function Header() {
  const [openSide, setOpenSide] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hoverVariant = { scale: 1.1 };
  const tapVariant = { scale: 1 };

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
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <nav className="flex flex-col  items-start gap-3  font-semibold  text-base text-gray-600">
                    <motion.div whileTap={tapVariant} whileHover={hoverVariant}>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive && "text-gray-800"
                        }
                      >
                        Home
                      </NavLink>
                    </motion.div>

                    <Categories />
                    <motion.div whileTap={tapVariant} whileHover={hoverVariant}>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive && "text-gray-800"
                        }
                      >
                        About
                      </NavLink>
                    </motion.div>
                    <motion.div whileTap={tapVariant} whileHover={hoverVariant}>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive && "text-gray-800"
                        }
                      >
                        Contact us
                      </NavLink>
                    </motion.div>
                  </nav>
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
