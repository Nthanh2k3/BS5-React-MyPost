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
import AccCreateByBoss from "./Components/AccCreateByBoss.js";
import Hello from "./Components/test.js";
import HomeBoss from "./pages/Boss/HomeBoss.jsx";
import ListTransferManager from "./Components/ListTransferManager.js";
import ListOffice from "./pages/Boss/ListOffice.js";
import ListWarehouse from "./pages/Boss/ListWarehouse.js";
import ListOfficeManager from "./pages/Boss/ListOfficeManager.js";
import ListWarehouseManager from "./pages/Boss/ListWarehouseManager.js";
import StatisticAll from "./pages/Boss/StatisticAll.js";
import StatisticOffice from "./pages/Boss/StatisticOffice.js";
import StatisticWarehouse from "./pages/Boss/StatisticWarehouse.js";
import HomeOfficeManager from "./pages/OfficeManager/HomeOfficeManager.jsx";
import ListOfficeStaff from "./pages/OfficeManager/ListOfficeStaff.js";
import HomeWarehouseManager from "./pages/WarehouseManager/HomeWarehouseManager.jsx";
import ListWarehouseStaff from "./pages/WarehouseManager/ListWarehouseStaff.js";
import Receipant from "./Components/Receipant.js";
import HomeOfficeStaff from "./pages/OfficeStaff/HomeOfficeStaff.jsx";
import CreateNewOrder from "./pages/OfficeStaff/CreatNewOrder.js";
import OrderStatus from "./pages/OfficeStaff/OrderStatus.js";
import HomeWarehouseStaff from "./pages/WarehouseStaff.js/HomeWarehouseStaff.jsx";
import WarehouseOrderStatus from "./pages/WarehouseStaff.js/WarehouseOrderStatus.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Root />}>
                    {/** public routes */}
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="tracking" element={<Tracking />}></Route>
                    <Route path="tracking/:id" element={<Tracking />} />
                    <Route path="bill/:id" element={<Receipant />} />

                    <Route path="*" element={<Home />} />

                    {/**protected routes */}

                    {/**Boss */}
                    <Route element={<BossRoute />}>
                        <Route path="boss" element={<HomeBoss />}>
                            <Route path="createAccount" element={<AccCreateByBoss />} />
                            <Route path="officeManager" element={<ListOfficeManager />} />
                            <Route path="warehouseManager" element={<ListWarehouseManager />} />
                            <Route path="office" element={<ListOffice />} />
                            <Route path="warehouse" element={<ListWarehouse />} />
                            <Route path="statistic/all" element={<StatisticAll />} />
                            <Route path="statistic/office" element={<ListOffice />}></Route>
                            <Route path="statistic/office/:id" element={<StatisticOffice />} />
                            <Route path="statistic/warehouse" element={<ListWarehouse />}></Route>
                            <Route
                                path="statistic/warehouse/:id"
                                element={<StatisticWarehouse />}
                            />
                        </Route>
                    </Route>

                    {/** Warehouse Staff */}
                    <Route element={<WarehouseStaffRoute />}>
                        <Route path="warehouseStaff" element={<HomeWarehouseStaff />}>
                            <Route path=":id" element={<WarehouseOrderStatus />} />
                        </Route>
                    </Route>

                    {/** Warehouse Manager */}
                    <Route element={<WarehouseManagerRoute />}>
                        <Route path="warehouseManager" element={<HomeWarehouseManager />}>
                            <Route path="warehouseStaff" element={<ListWarehouseStaff />} />
                            <Route path=":id" element={<StatisticWarehouse />} />
                        </Route>
                    </Route>

                    {/** Office Staff */}
                    <Route element={<OfficeStaffRoute />}>
                        <Route path="officeStaff" element={<HomeOfficeStaff />}>
                            <Route path="createOrder" element={<CreateNewOrder />}></Route>
                            <Route path=":id" element={<OrderStatus />} />
                        </Route>
                    </Route>

                    {/** Office Manager */}
                    <Route element={<OfficeManagerRoute />}>
                        <Route path="officeManager" element={<HomeOfficeManager />}>
                            <Route path="officeStaff" element={<ListOfficeStaff />} />
                            <Route path=":id" element={<StatisticOffice />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
