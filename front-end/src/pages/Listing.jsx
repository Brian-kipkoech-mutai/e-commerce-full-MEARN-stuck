import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
import { filters } from "@/utils/filterData";
import { isFunction } from "util";
import Loading from "@/components/Loading";

function Listing({
  handleSelect,
  selectedValues,
  ref,
  data,
  isFetchingNextPage,
  status,
  filtersData,
  filtersError,
  isFetchingFilters,
}) {
  return (
    <div className="space-y-5">
      <Drawer>
        <DrawerTrigger className="flex font-semibold gap-1 border p-1 px-2 rounded bg-gray-800 text-white ">
          filter <FilterXIcon className="w-4" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose className="self-end px-4 ">
            <Button variant="outline" className="shadow-md">
              close
            </Button>
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle className="sr-only">Filters</DrawerTitle>
            <DrawerDescription>
              {isFetchingFilters ? (
                <Loading message={"loading hold on"} />
              ) : (
                <div className="space-y-2 max-h-svh overflow-scroll">
                  {filtersData.map((set) => (
                    <FilterCategory
                      {...{ set, handleSelect, selectedValues }}
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

      <Pagination className="border w-fit rounded">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">400</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Listing;
