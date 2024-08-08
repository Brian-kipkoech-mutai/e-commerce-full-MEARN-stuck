import { useToast } from "@/components/ui/use-toast";
import useFormData from "@/hooks/useFormData";
import usePost from "@/hooks/usePost";
import Login from "@/pages/Login";
import { login } from "@/services/authServices";
import ShowToast from "@/utils/ShowToast";
import React from "react";

function LoginContainer() {
  const { data, error, loading, postData } = usePost(login);
  const { handleChange, handleSubmit } = useFormData();
  const { toast } = useToast();
  ShowToast(toast, data, error);
  return <Login {...{ handleChange, handleSubmit, postData, loading }} />;
}

export default LoginContainer;
