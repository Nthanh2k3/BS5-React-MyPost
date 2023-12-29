import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Tracking from "../../Components/Tracking"
import Sidebar from "../../Components/Sidebar"
import { Outlet } from "react-router-dom";
import HeaderBoss from "../../Components/HeaderBoss";
import toast, { Toaster } from "react-hot-toast";

function HomeBoss() {
    return (
        <div className="flexbox flex-col h-full">
          <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            style: {
                                background: "green",
                                color: "#FFFFFF",
                                border: "1px solid black",
                            },
                        },
                        error: {
                            style: {
                                background: "red",
                            },
                        },
                    }}
                />
            </div>
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