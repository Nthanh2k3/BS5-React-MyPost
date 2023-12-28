import Header from "../../Components/Header"
import { Outlet } from "react-router-dom";
import SidebarForWS from "./SidebarForWS";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../functions/axiosInstance";
import * as officeStaffService from "../../apiService/officeStaffService"
import * as wareHouseStaffService from "../../apiService/wareHouseStaffService"
import Cookies from "js-cookie";
import { Button } from "@material-tailwind/react";


function HomeWarehouseStaff() {
    const [warehouseId, setWarehouseId] = useState("");
    
    const fetchData = async () => {
        try {
            const roleResponse = await axiosInstance.get(`user/role`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("jwt")}`,
                },
            });
            console.log(roleResponse.data.warehouseID)
            setWarehouseId(roleResponse.data.warehouseID);

            
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
            <Header/>
            {/* <Button onClick={testFunction}>Click</Button> */}
            <div className="flex h-full">
                <div className="w-60">
                    <SidebarForWS warehouseId={warehouseId}/>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default HomeWarehouseStaff