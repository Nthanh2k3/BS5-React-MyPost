import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Tracking from "../../Components/Tracking"
import Sidebar from "../../Components/Sidebar"
import { Outlet } from "react-router-dom";
import HeaderBoss from "../../Components/HeaderBoss";
import { Row } from "react-bootstrap";

function HomeBoss() {
    return (
        <div className="flexbox flex-col h-full">
            <div className="sticky top-0 w-full z-50">
                <HeaderBoss/>
               <div className="flex flex-row h-full">
               <div className="h-max ">
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-y-auto bg-gray">
                    <Outlet />
                </div>
               </div>
            </div>
            
         </div>
    )
}


export default HomeBoss