import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Tracking from "../../Components/Tracking"
import Sidebar from "../../Components/Sidebar"
import { Outlet } from "react-router-dom";

function HomeBoss() {
    return (
        <div className="">
            <Header/>
            <div className="grid grid-cols-2">
            <Sidebar/>
            <Outlet/>
            </div>
        </div>
    )

}

export default HomeBoss