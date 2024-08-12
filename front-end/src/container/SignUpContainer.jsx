import { useToast } from "@/components/ui/use-toast";
import usePost from "@/hooks/usePost";
import SignUp from "@/pages/SignUp";
import { gooleRegister, registerUser } from "@/services/authServices";
import React, { useState } from "react";
import ShowToast from "@/utils/ShowToast";
import { useNavigate } from "react-router-dom";
import useFormData from "@/hooks/useFormData";

function SignUpContainer(props) {
  const { data, error, postData, loading } = usePost();
  const { handleChange, formData } = useFormData();
  const { toast } = useToast();
  const naviage = useNavigate();
  data && naviage("/");
  ShowToast(toast, data, error);

  const handleSubmit = (e) => {
    e.preventDefault();

    postData(formData, registerUser);
  };
  const handleGoogleSignup = (idToken) => {
    postData({ idToken }, gooleRegister);
  };
  return (
    <SignUp
      {...{
        handleChange,
        handleSubmit,
        handleGoogleSignup,
        loading,
        data,
        error,
      }}
    />
  );
}

export default SignUpContainer;
