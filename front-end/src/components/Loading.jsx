import React from "react";
import { PacmanLoader } from "react-spinners";
import Trasition from "./Trasition";
function Loading({ message }) {
  return (
    <div className="px-4 h-80  flex justify-center items-center ">
      <h2 className=" flex gap-4 items-center">
        {" "}
        <span className="text-lg font-semibold flex gap-2">{message}</span>
        {<PacmanLoader color="gray" size={20} />}{" "}
      </h2>
      <Trasition />
    </div>
  );
}

export default Loading;
