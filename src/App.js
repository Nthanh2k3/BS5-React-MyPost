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

function App() {
    return (
        <AccCreateByBoss/>
    );
}

export default App;
