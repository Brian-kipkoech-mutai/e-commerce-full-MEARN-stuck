import SignUp from "@/pages/SignUp";
import { useGoogleLogin } from "@react-oauth/google";

import React, { useState } from "react";
function SignUpContainer(props) {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
  };
  const handleGoogleSignup = useGoogleLogin({
    onSuccess: (token) => console.log(token),
    onError: (error) => log(error),
  });

  return <SignUp {...{ handleChange, handleSubmit, handleGoogleSignup }} />;
}

export default SignUpContainer;
