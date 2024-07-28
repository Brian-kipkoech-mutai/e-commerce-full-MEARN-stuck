import { motion } from "framer-motion";
 
function MenuBar({ isMenuOpen:open, toggleMenu }) {
  const lineVariants = {
    open: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    closeTop: {
      rotate: 45,
      y: 7,
      transition: { duration: 0.3 },
    },
    closeMiddle: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    closeBottom: {
      rotate: -45,
      y: -7,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div className="space-y-1 cursor-pointer" onClick={toggleMenu}>
      <motion.section
        className="h-1 w-6 bg-gray-800 rounded-md"
        variants={lineVariants}
        animate={open ? "closeTop" : "open"}
      />
      <motion.section
        className="h-1 w-6 bg-gray-800 rounded-md"
        variants={lineVariants}
        animate={open ? "closeMiddle" : "open"}
      />
      <motion.section
        className="h-1 w-6 bg-gray-800 rounded-md"
        variants={lineVariants}
        animate={open ? "closeBottom" : "open"}
      />
    </motion.div>
  );
}

export default MenuBar;
