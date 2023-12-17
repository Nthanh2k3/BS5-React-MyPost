import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const WarehouseManagerRoute = () => {
    let auth = { isWarehouseManager: false };

    console.log(Cookies.get("role"));
    if (Cookies.get("role") === "warehouseManager") {
        auth.isWarehouseManager = true;
    }
    return auth.isWarehouseManager ? <Outlet /> : <Navigate to="*" />;
};

export default WarehouseManagerRoute;
