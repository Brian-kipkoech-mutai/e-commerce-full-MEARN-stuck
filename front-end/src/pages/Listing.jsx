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
import { FilterXIcon } from "lucide-react";
import FilterCategory from "@/components/FilterCategory";
import Loading from "@/components/Loading";
import ListingBox from "@/components/listingBox";
import Trasition from "@/components/Trasition";
import { motion } from "framer-motion";

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
          className="flex gap-1 px-2 sticky top-4 z-20"
          animate={scrollDir === "up" ? "up" : "down"}
        >
          <div className="flex-1 overflow-x-auto">
            <section>applied filters</section>
            <section className="flex gap-2">
              {" "}
              {Object.keys(selectedValues).map((filter, i) => (
                <div className="" kety={i}>
                  {" "}
                  {filter}
                </div>
              ))}{" "}
            </section>
          </div>
          <Drawer>
            <DrawerTrigger className=" flex font-semibold gap-1 border p-1 px-2 rounded  text-white  bg-gray-800 mr-2">
              Filters <FilterXIcon className="w-4" />
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
                      {filtersData.data.map(({ name, options }) => (
                        <FilterCategory
                          key={name}
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
