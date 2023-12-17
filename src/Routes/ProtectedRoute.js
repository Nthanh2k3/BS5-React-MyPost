import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute() {
    let auth = { token: false };
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
