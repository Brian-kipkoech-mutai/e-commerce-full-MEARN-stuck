import useFetch from "@/hooks/useFetch";
import { checkAuth } from "@/services/authServices";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Trasition from "./Trasition";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";
import ShowToast from "@/utils/ShowToast";
import Loading from "./Loading";

function ProtectedRoutes() {
  const navigate = useNavigate();
  const { data, error } = useFetch(checkAuth);
  const { toast } = useToast();
  ShowToast(toast, null, error, "/login", "login");
  if (error) setTimeout(() => navigate("/login"), 300);
  const message = "verifying user authentication please wait...";
  return (
    <div>
      <Trasition />
      <Toaster />
      {!data ? <Loading {...{ message }} /> : <Outlet />}
    </div>
  );
}

export default ProtectedRoutes;
