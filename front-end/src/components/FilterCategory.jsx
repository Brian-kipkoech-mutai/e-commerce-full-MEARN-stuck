import classNames from "classnames";
import { XIcon } from "lucide-react";
import React from "react";

function FilterCategory({ name,options, handleSelect, selectedValues }) {

  return (
    <section className="">
      <h2 className="font-semibold text-gray-800 mb-1">{name}</h2>
      <section className="flex gap-2 gap-y-2  flex-wrap">
        {options.map(({ label, value }) => (
          <div
            key={label}
            className={classNames(
              "px-2 rounded-full   bg-gray-100 w-fit flex gap-1 items-center border",
              {
                "bg-teal-600 text-teal-100": value in selectedValues,
              }
            )}
            onClick={() => handleSelect({ name, value })}
          >
            <span className="font-semibold text-xs">{label}</span>{" "}
            <XIcon className="w-3" />
          </div>
        ))}
      </section>
    </section>
  );
}

export default FilterCategory;
