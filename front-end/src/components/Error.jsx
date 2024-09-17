import { ServerCrash } from "lucide-react";
import React from "react";
 

function ErrorComponent({ message }) {
  return (
    <div className="px-4 h-80  flex justify-center items-center ">
      <h2 className=" flex gap-4 items-center">
        {" "}
        <span className="text-lg font-semibold flex gap-2">{message}</span>
        {<ServerCrash color="gray" size={20} />}{" "}
      </h2>
      
    </div>
  );
}

export default ErrorComponent;
