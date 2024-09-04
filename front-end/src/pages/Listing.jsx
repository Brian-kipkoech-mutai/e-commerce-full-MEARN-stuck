import React, { forwardRef } from "react";
import useDetectScroll from "@smakss/react-scroll-direction";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ActivitySquare, FilterXIcon } from "lucide-react";
import FilterCategory from "@/components/FilterCategory";
import Loading from "@/components/Loading";
import ListingBox from "@/components/listingBox";
import Trasition from "@/components/Trasition";
import { motion } from "framer-motion";
import { DotFilledIcon } from "@radix-ui/react-icons";

const Listing = forwardRef(
  (
    {
      handleSelect,
      selectedValues,
      data,
      isFetchingNextPage,
      status,
      filtersData,
      filtersError,
      isFetchingFilters,
    },
    ref
  ) => {
    const { scrollDir } = useDetectScroll();
    //scroll variance
    const variants = {
      up: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
      down: {
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.5,
          type: "spring",
        },
      },
    };

    return (
      <div className="space-y-5">
        <motion.div
          variants={variants}
          className="flex gap-1 px-2 sticky top-0 z-20 border shadow-sm rounded-lg bg-gray-50  py-1"
          animate={scrollDir === "up" ? "up" : "down"}
        >
          <div className="flex-1  overflow-x-auto  flex  items-center">
            {/* <section className="font-semibold sticky right-0 ">applied filters</section> */}
            <section className="flex gap-2 ">
              {" "}
              {Object.values(selectedValues).map((label, i) => (
                <div
                  className="px-2 rounded-full  text-nowrap  bg-gray-100 w-fit flex gap-1 items-center border text-muted-foreground"
                  kety={i}
                >
                  {" "}
                  {label} <span className="block bg-green-600 rounded-full w-2 h-2 ml-1"></span>
                </div>
              ))}{" "}
            </section>
          </div>
          <Drawer>
            <DrawerTrigger className="border px-2  rounded  py-2 flex gap-1 items-center  bg-gray-800 text-white ">
              <span className="block">Filters</span> <FilterXIcon className="w-4 block" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerClose className="self-end px-4">
                <Button variant="outline" className="shadow-md">
                  Close
                </Button>
              </DrawerClose>
              <DrawerHeader>
                <DrawerTitle className="sr-only">Filters</DrawerTitle>
                <DrawerDescription>
                  {isFetchingFilters ? (
                    <Loading message="Loading, hold on" />
                  ) : (
                    <div className="space-y-2 max-h-svh overflow-scroll">
                      {filtersData.data.map(({ name, options },i) => (
                        <FilterCategory
                          key={i}
                          name={name}
                          options={options}
                          handleSelect={handleSelect}
                          selectedValues={selectedValues}
                        />
                      ))}
                    </div>
                  )}
                </DrawerDescription>
              </DrawerHeader>
              {/* <DrawerFooter>
              <Button>Submit</Button>
            </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </motion.div>
        {status === "pending" ? (
          <Loading />
        ) : data ? (
          <ListingBox {...{ data, isFetchingNextPage }} ref={ref} />
        ) : (
          <p>Error loading data</p>
        )}
        <Trasition />
      </div>
    );
  }
);

export default Listing;
