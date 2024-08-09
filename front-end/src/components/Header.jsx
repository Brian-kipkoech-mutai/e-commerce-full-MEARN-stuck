import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import MenuBar from "./menuBar";
import { useState } from "react";
import Logo from "@/assets/logo";
import { Link, NavLink } from "react-router-dom";
import Categories from "./categories";
import { motion } from "framer-motion";
import { User, ShoppingCart, ChevronRight } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

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
    <header className="space-y-2 mx-auto ">
      <section className="bg-gray-800 flex items-center justify-center text-white p-1">
        Get 25% OFF on your first order.
      </section>
      <section className="flex items-center justify-between  mx-auto max-w-screen-lg">
        <section className="font-semibold text-lg flex items-center text-gray-800 gap-2 px-4">
          <Logo />
          <span>Trend Hive</span>
        </section>
        <section className="hidden lg:visible  lg:flex items-center gap-4 font-semibold">
          <NavLink to={"/"}>Home</NavLink>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 p-2 pr-8 text-gray-600   ">
                  <NavigationMenuLink className="hover:text-gray-800 cursor-pointer">
                    men
                  </NavigationMenuLink>
                  <NavigationMenuLink className="hover:text-gray-800 cursor-pointer">
                    women
                  </NavigationMenuLink>
                  <NavigationMenuLink className="hover:text-gray-800 cursor-pointer">
                    Children
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </section>
        <section className="flex items-center pr-2 lg:hidden">
          <Sheet open={openSide} onOpenChange={toggleMenu}>
            <SheetTrigger>
              <MenuBar {...{ isMenuOpen, toggleMenu }} />
            </SheetTrigger>
            <SheetContent side={"right"}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <nav className="flex flex-col  items-start gap-3  font-semibold  text-base text-gray-600 mt-2">
                    <div className="flex justify-between  w-full  ">
                      <motion.div
                        className="flex flex-col items-center gap-1 cursor-pointer"
                        whileTap={tapVariant}
                        whileHover={hoverVariant}
                      >
                        <div className="rounded-full border p-1">
                          {" "}
                          <NavLink to={"/profile"}>
                            {" "}
                            <User />
                          </NavLink>
                        </div>
                        <span className="font-normal">Profile</span>
                      </motion.div>
                      <motion.div
                        className="hover:cursor-pointer "
                        whileTap={tapVariant}
                        whileHover={hoverVariant}
                      >
                        <motion.div
                          className="flex flex-col items-center gap-1 cursor-pointer"
                          whileTap={tapVariant}
                          whileHover={hoverVariant}
                        >
                          <div className=" ">
                            {" "}
                            <NavLink to={"/cart"}>
                              {" "}
                              <ShoppingCart />
                            </NavLink>
                          </div>
                          <span className="font-normal">Cart</span>
                        </motion.div>
                      </motion.div>
                    </div>
                    <hr className="w-full " />
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
                        to={"/about"}
                        className={({ isActive }) =>
                          isActive && "text-gray-800"
                        }
                      >
                        About
                      </NavLink>
                    </motion.div>
                    <motion.div whileTap={tapVariant} whileHover={hoverVariant}>
                      <NavLink
                        to={"/contactus"}
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
        <section className=" hidden lg:block p-2  ">
          <div
            className="flex h-9 w-80 max-w-full  mx-auto rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
            
              items-center"
          >
            <MagnifyingGlassIcon className="h-6 w-6 "></MagnifyingGlassIcon>
            <input
              type="text"
              className=" outline-none placeholder:pl-2 h-full w-full"
              placeholder="Search products"
            />
          </div>
        </section>
        <section className="hidden lg:flex gap-6 items-center ">
          <div className=" rounded-full p-1 border cursor-pointer">
            <NavLink to={"/profile"}>
              <User></User>
            </NavLink>
          </div>
          <div className="cursor-pointer">
            {" "}
            <NavLink to={"/cart"}>
              <ShoppingCart></ShoppingCart>
            </NavLink>
          </div>
        </section>
      </section>
      <section className="p-2 lg:hidden">
        <div className="flex h-9 w-96 max-w-full  mx-auto rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 items-center">
          <MagnifyingGlassIcon className="h-6 w-6 "></MagnifyingGlassIcon>
          <input
            type="text"
            className=" outline-none placeholder:pl-2 h-full w-full"
            placeholder="Search products"
          />
        </div>
      </section>
      <div className="py-6">
        <div className="max-w-screen-lg mx-auto pl-14">
          <h1 className=" text-xl font-semibold">Page Title</h1>
          <p className="text-gray-600 text-sm mt-2">
            TrendHive <ChevronRight className="inline"></ChevronRight>
            <span className="text-gray-800">page Name</span>
          </p>
        </div>
      </div>
    </header>
  );
}
export default Header;
