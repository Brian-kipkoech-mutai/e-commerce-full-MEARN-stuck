import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function QunatityComponent({ setOptions, quantity }) {
  const [decrease, setDecreaseFlag] = useState(false);
  const quantityButtonVariance = {
    tap: {
      scale: 2,
    },
  };

  return (
    <div>
      <div className="flex border   rounded-md w-fit">
        <motion.button
          className="w-12 h-10 grid place-items-center cursor-pointer  font-bold  relative "
          variants={quantityButtonVariance}
          whileTap="tap"
          onClick={() => {
            quantity > 1 &&
              setOptions((prev) => ({
                ...prev,
                quantity: prev.quantity - 1,
              }));
            setDecreaseFlag(true);
          }}
          disabled={quantity === 1}
        >
          -
        </motion.button>
        <AnimatePresence mode="wait">
          <motion.div
            className="w-12 h-10 grid place-items-center cursor-pointer"
            initial={{
              y: decrease ? 10 : -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: decrease ? -10 : 10,
              opacity: 0,
            }}
            key={quantity}
          >
            {quantity}
          </motion.div>
        </AnimatePresence>
        <motion.button
          className="w-12 h-10 grid place-items-center cursor-pointer font-bold"
          variants={quantityButtonVariance}
          whileTap="tap"
          onClick={() => {
            setOptions((prev) => ({
              ...prev,
              quantity: prev.quantity + 1,
            }));
            setDecreaseFlag(false);
          }}
        >
          <p>+</p>
        </motion.button>
      </div>
    </div>
  );
}

export default QunatityComponent;
