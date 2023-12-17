import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const BossRoute = () => {
    let auth = { isBoss: false };
    console.log(Cookies.get("role"));
    if (Cookies.get("role") === "boss") {
        auth.isBoss = true;
    }
    return auth.isBoss ? <Outlet /> : <Navigate to="*" />;
};

export default BossRoute;
