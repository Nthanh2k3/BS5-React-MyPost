import React, { useState, useEffect } from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SignupAlert from "../Components/SignupAlert";
import LoginForm from "../Components/LoginForm";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

function Login() {
    const navigate = useNavigate()
    const fetchData = async () => {
        try {
            const roleResponse = Cookies.get("role")
            switch (roleResponse) {
                case "boss":
                    navigate("/boss");
                    break;
                case "warehouseStaff":
                    navigate("/warehouseStaff");
                    break;

                case "warehouseManager":
                    navigate("/warehouseManager");
                    break;

                case "officeStaff":
                    navigate("/officeStaff");
                    break;

                case "officeManager":
                    navigate("/officeManager");
                    break;
            }

            
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
            fetchData()
    },[])

    return(
        <div>
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}
export default Login;