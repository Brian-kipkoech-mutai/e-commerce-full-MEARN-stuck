import usePost from "@/hooks/usePost";
import SignUp from "@/pages/SignUp";
import { registerUser } from "@/services/authServices";
import { useGoogleLogin } from "@react-oauth/google";

import React, { useState } from "react";
function SignUpContainer(props) {
  const [formData, setFormData] = useState({});

  const { data, error, postData, loading } = usePost(registerUser);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
