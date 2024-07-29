import Root from "@/pages/root";
import { AnimatePresence } from "framer-motion";
import React, { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";

function RoutesConfig() {
  const routes = useRoutes([{
    path: "/",
      element: <Root />,
      children: [
        
    ]
  }]);

  return (
    <AnimatePresence>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );
}

export default RoutesConfig;
