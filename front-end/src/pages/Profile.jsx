import Trasition from "@/components/Trasition";
import { authContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  return (
    <div>
      <p className="text-3xl text-green-400">hhhhhhhhhhhhhhhhhhhhhome  good home</p>
      <Trasition />
    </div>
  );
}

export default Profile;
