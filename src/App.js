import "./App.css";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Tracking from "./Components/Tracking.js";
import Header from "./Components/Header.js";
import Root from "./pages/root.jsx";
import ProtectedRoute from "./Routes/ProtectedRoute.js";
import WarehouseStaffRoute from "./Routes/WarehouseStaffRoute.js";
import OfficeManagerRoute from "./Routes/OfficeManagerRoute.js";
import OfficeStaffRoute from "./Routes/OfficeStaffRoute.js";
import WarehouseManagerRoute from "./Routes/WarehouseManagerRoute.js";
import BossRoute from "./Routes/BossRoute.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Root />}>
                    {/** public routes */}
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="tracking" element={<Tracking />} />
                    <Route path="*" element={<Home />} />
                    {/**protected routes */}

                    <Route element={<BossRoute />}>
                        <Route path="boss" element={<div>boss</div>} />
                    </Route>

                    <Route element={<WarehouseStaffRoute />}>
                        <Route path="warehouseStaff" element={<div>warehouseStaff</div>} />
                    </Route>

                    <Route element={<WarehouseManagerRoute />}>
                        <Route path="warehouseManager" element={<div>warehouseManager</div>} />
                    </Route>

                    <Route element={<OfficeStaffRoute />}>
                        <Route path="officeStaff" element={<div>officeStaff</div>} />
                    </Route>

                    <Route element={<OfficeManagerRoute />}>
                        <Route path="officeManager" element={<div>officeManager</div>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
