import Trasition from "@/components/Trasition";
import { authContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const { isAuthenticated } = useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
          <p>{isAuthenticated}</p>
          <Trasition/>
    </div>
  );
}

export default Profile;
