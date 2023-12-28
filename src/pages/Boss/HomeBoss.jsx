import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Tracking from "../../Components/Tracking"
import Sidebar from "../../Components/Sidebar"
import { Outlet } from "react-router-dom";
import HeaderBoss from "../../Components/HeaderBoss";

function HomeBoss() {
    return (
        <div className="flex flex-col h-full">
            <div className="sticky top-0 w-full z-50">
                <HeaderBoss/>
               <div className="flex flex-row h-full">
               <div className="sticky left-0 top-0 h-max z-20">
                    <Sidebar />
                </div>
                <div className="bg-gray-50 w-full">
                    <Outlet />
                </div>
               </div>
            </div>
            
         </div>
    )
}


export default HomeBoss