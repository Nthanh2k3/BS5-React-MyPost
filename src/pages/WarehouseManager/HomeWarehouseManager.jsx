import Header from "../../Components/Header"
import { Outlet } from "react-router-dom";
import SidebarForWM from "./SidebarForWM";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../functions/axiosInstance";
import Cookies from "js-cookie";


function HomeWarehouseManager() {
    const [warehouseId, setwarehouseId] = useState("");
    
    const fetchData = async () => {
        try {
            const roleResponse = await axiosInstance.get(`user/role`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("jwt")}`,
                },
            });
            setwarehouseId(roleResponse.data.warehouseID);

            
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    fetchData();

    return (
        <div className="">
            <Header/>
            <div className="flex h-full">
                <div className="w-60">
                    <SidebarForWM warehouseId={warehouseId}/>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default HomeWarehouseManager