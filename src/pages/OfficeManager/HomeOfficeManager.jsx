import Header from "../../Components/Header"
import { Outlet } from "react-router-dom";
import SidebarForOM from "./SidebarForOM";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../functions/axiosInstance";
import Cookies from "js-cookie";
import HeaderOfficeManager from "../../Components/HeaderOfficeManager";
import HeaderBoss from "../../Components/HeaderBoss";


function HomeOfficeManager() {
    const [postOfficeId, setPostOfficeId] = useState("");
    
    const fetchData = async () => {
        try {
            const roleResponse = await axiosInstance.get(`user/role`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("jwt")}`,
                },
            });
            setPostOfficeId(roleResponse.data.postOfficeID);

            
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    fetchData();

    return (
        <div className="">
            <HeaderOfficeManager/>
            <div className="flex h-full">
                <div className="w-60">
                    <SidebarForOM postOfficeId={postOfficeId}/>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default HomeOfficeManager