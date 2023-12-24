import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Tracking from "../../Components/Tracking"
import Sidebar from "../../Components/Sidebar"
import { Outlet } from "react-router-dom";

function HomeBoss() {
    return (
        <div className="">
            <Header/>
            <div className="flex h-full">
                <div className="w-60">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default HomeBoss