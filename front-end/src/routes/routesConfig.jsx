import BestSelling from "@/components/BestSelling";
import DetailSection from "@/components/DetailSection";
import Featured from "@/components/Featured";
import LatestProducts from "@/components/Latest";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import QuestRoutes from "@/components/QuestRoutes";
import ReviewSection from "@/components/ReviewSection";
import ListingContainer from "@/container/ListingContainer";
import LoginContainer from "@/container/LoginContainer";
import ProductContainer from "@/container/productContainer";
import SignUpContainer from "@/container/SignUpContainer";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/home";
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
          path: "",
          element: <Home />,

          children: [
            { path: "", element: <BestSelling /> },
            { path: "featured", element: <Featured /> },
            { path: "latest", element: <LatestProducts /> },
          ],
        },
        {
          path: "search",
          element: <ListingContainer />,
        },
        {
          path: "product/details",
          element: <ProductContainer />,
          children: [
            { path: "reviews", element: <ReviewSection /> },
            { path: "details", element: <DetailSection /> },
          ],
        },
        {
          path: "login",
          element: <QuestRoutes />,
          children: [{ path: "", element: <LoginContainer /> }],
        },
        {
          path: "signup",
          element: <SignUpContainer />,
        },
        {
          path: "profile",
          element: <ProtectedRoutes />,
          children: [{ path: "", element: <Profile /> }],
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "verification/:status",
          element: <Verification />,
        },
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
