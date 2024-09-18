import BestSelling from "@/components/BestSelling";
import Featured from "@/components/Featured";
import LatestProducts from "@/components/Latest";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import QuestRoutes from "@/components/QuestRoutes";
import DetailsContainer from "@/container/detailsContainer";
import ListingContainer from "@/container/ListingContainer";
import LoginContainer from "@/container/LoginContainer";
import ProductContainer from "@/container/productContainer";
import ReviewConatainer from "@/container/ReviewConatainer";
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
  const { pathname, search } = useLocation();
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
          path: "product",
          element: <ProductContainer />,
          children: [
            { path: "reviews", element: <ReviewConatainer /> },
            { path: "details", element: <DetailsContainer/>},
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
      {cloneElement(routes, { key: `${pathname} ${search}` })}
    </AnimatePresence>
  );
}

export default RoutesConfig;
