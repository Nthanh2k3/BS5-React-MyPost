import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const OfficeManagerRoute = () => {
    let auth = { isWarehouseStaff: false };
    console.log(Cookies.get("role"));
    if (Cookies.get("role") === "officeManager") {
        auth.isWarehouseStaff = true;
    }
    return auth.isWarehouseStaff ? <Outlet /> : <Navigate to="*" />;
};

export default OfficeManagerRoute;
