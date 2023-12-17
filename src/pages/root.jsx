import { Outlet } from "react-router-dom"
import Home from "./Home"
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function Root() {
    return (
        <div>
            <Outlet/>
        </div>
    )

}

export default Root