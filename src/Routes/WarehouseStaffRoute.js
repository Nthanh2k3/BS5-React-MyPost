import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const WarehouseStaffRoute = () => {
    let auth = { isWarehouseStaff: false };
    console.log(Cookies.get("role"));
    if (Cookies.get("role") === "warehouseStaff") {
        auth.isWarehouseStaff = true;
    }
    return auth.isWarehouseStaff ? <Outlet /> : <Navigate to="*" />;
};

export default WarehouseStaffRoute;
