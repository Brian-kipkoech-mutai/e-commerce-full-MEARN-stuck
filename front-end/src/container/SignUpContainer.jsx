import { useToast } from "@/components/ui/use-toast";
import usePost from "@/hooks/usePost";

import SignUp from "@/pages/SignUp";
import { registerUser } from "@/services/authServices";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import ShowToast from "@/utils/ShowToast";

function SignUpContainer(props) {
  const [formData, setFormData] = useState({});

  const { data, error, postData, loading, resetDefault } =
    usePost(registerUser);
  const { toast } = useToast();

  ShowToast(toast, data, error);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetDefault();
    postData(formData);
  };
  const handleGoogleSignup = useGoogleLogin({
    onSuccess: (token) => console.log(token),
    onError: (error) => log(error),
  });

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
