import useFetch from "@/hooks/useFetch";
import { checkAuth } from "@/services/authServices";
import React from "react";
import Loading from "./Loading";
import { Outlet, useNavigate } from "react-router-dom";


function QuestRoutes() {
    const naviage=useNavigate()
    const { data,loading } = useFetch(checkAuth);
    const message='checking if user is not authenticated'
    return  loading?<Loading {...{message}} />:data?naviage('/'):<Outlet/>
      
}

export default QuestRoutes;
