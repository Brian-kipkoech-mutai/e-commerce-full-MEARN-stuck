import Featured from "@/components/Featured";
import Latest from "@/components/Latest";
import Home from "@/pages/home";
import Product from "@/pages/Product";
import Root from "@/pages/root";
import { AnimatePresence } from "framer-motion";
import React, { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";

function RoutesConfig() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            { path: "/", element: <Featured /> },
            { path: "featured", element: <Featured /> },
            { path: "latest", element: <Latest /> },
          ],
        },
        {
          path: 'product',
          element: <Product />,
          
        }
        
      ],
    },
  ]);

  return (
    <AnimatePresence>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );
}

export default RoutesConfig;
