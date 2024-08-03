import { motion, useIsPresent } from "framer-motion";
import React from "react";

function Trasition(props) {
  const isPresent = useIsPresent();
  return (
    <motion.div
      className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300 z-50"
      initial={{
        scaleX: 1,
      }}
      animate={{
        scaleX: 0,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      exit={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circIn" },
      }}
      style={{
        originX: isPresent ? 0 : 1,
      }}
    ></motion.div>
  );
}

export default Trasition;
