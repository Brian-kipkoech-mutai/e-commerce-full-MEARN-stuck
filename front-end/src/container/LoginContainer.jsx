import { useToast } from "@/components/ui/use-toast";
import useFormData from "@/hooks/useFormData";
import usePost from "@/hooks/usePost";
import Login from "@/pages/Login";
import { gooleLogin, login } from "@/services/authServices";
import ShowToast from "@/utils/ShowToast";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const naviage = useNavigate();
  const { data, error, loading, postData } = usePost(login);
  const { handleChange, formData } = useFormData();
  const { toast } = useToast();
  ShowToast(toast, data, error);
  data && naviage("/");

  const handleGoogleLogin = (idToken) => {
    postData({ idToken }, gooleLogin);
  };

  const handleLogin = () => {
    postData(formData, login);
  };

  return (
    <Login
      {...{
        handleChange,
        postData,
        loading,
        handleGoogleLogin,
        handleLogin,
      }}
    />
  );
}

export default LoginContainer;
