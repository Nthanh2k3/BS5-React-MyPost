import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const OfficeStaffRoute = () => {
    let auth = { isWarehouseStaff: false };
    console.log(Cookies.get("role"));
    if (Cookies.get("role") === "officeStaff") {
        auth.isWarehouseStaff = true;
    }
    return auth.isWarehouseStaff ? <Outlet /> : <Navigate to="*" />;
};

export default OfficeStaffRoute;
