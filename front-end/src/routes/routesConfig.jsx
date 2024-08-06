import DetailSection from "@/components/DetailSection";
import Featured from "@/components/Featured";
import Latest from "@/components/Latest";
import ReviewSection from "@/components/ReviewSection";
import SignUpContainer from "@/container/SignUpContainer";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/home";
import Login from "@/pages/Login";
import Product from "@/pages/Product";
import Profile from "@/pages/Profile";
import Root from "@/pages/root";
import Verification from "@/pages/Verification";
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
          path: "product",
          element: <Product />,
          children: [
            { path: "reviews", element: <ReviewSection /> },
            { path: "details", element: <DetailSection /> },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUpContainer/>,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "/verification/:status",
          element:<Verification/>
        }
      ],
    },
  ]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );
}

export default RoutesConfig;
