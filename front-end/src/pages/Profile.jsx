import Trasition from "@/components/Trasition";
import { authContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardimage from "../assets/images/pexels-mart-production-9558581.jpg";
import CardBox from "@/components/listingBox";

function Profile(props) {
  return (
    <div className="">
      <CardBox />
      <Trasition />
    </div>
  );
}

export default Profile;
