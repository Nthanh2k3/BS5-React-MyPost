import { Outlet } from "react-router-dom";
import SidebarForOS from "./SidebarForOS";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../functions/axiosInstance";
import * as officeStaffService from "../../apiService/officeStaffService"
import * as wareHouseStaffService from "../../apiService/wareHouseStaffService"
import Cookies from "js-cookie";
import { Button } from "@material-tailwind/react";
import HeaderOfficeStaff from "../../Components/HeaderOfficeStaff";
import HeaderBoss from "../../Components/HeaderBoss";


function HomeOfficeStaff() {
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

    const testFunction = async () => {
        await officeStaffService.updateShipFailled("100011")
    }

    return (
        <div className="">
            <HeaderBoss/>
            {/* <Button onClick={testFunction}>Click</Button> */}
            <div className="flex h-full">
                <div className="w-60">
                    <SidebarForOS postOfficeId={postOfficeId}/>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default HomeOfficeStaff