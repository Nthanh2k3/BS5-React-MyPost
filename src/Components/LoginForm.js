import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../functions/axiosInstance";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
    const [info, setInfo] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = () => {
        loginAPI();
    };

    const navigate = useNavigate();

    const loginAPI = async () => {
        try {
            const response = await axiosInstance.post(`user/login`, info);
            // Handle the response data
            const decoded = jwtDecode(response.data.accessToken);
            Cookies.set("jwt", response.data.accessToken);
            Cookies.set("role", decoded.role);
            console.log(Cookies.get("role"));

            switch (decoded.role) {
                case "boss":
                    navigate("/boss/statistic/all");
                    break;
                case "warehouseStaff":
                    navigate("/warehouseStaff");
                    break;

                case "warehouseManager":
                    navigate("/warehouseManager/warehouseStaff");
                    break;

                case "officeStaff":
                    navigate("/officeStaff");
                    break;

                case "officeManager":
                    navigate("/officeManager/officeStaff");
                    break;
            }
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
            toast.error("Invalid Username or Password ");
        }
    };

    return (
        <div>
            <div className="d-flex flex-column justify-content-center" id="login-box">
                <div>
                    <Toaster position="top-right" />
                </div>
                <div className="login-box-header">
                    <h4
                        style={{
                            fontFamily: "Cookie, serif",
                            color: "rgb(0,0,0)",
                            marginBottom: 0,
                            fontWeight: 400,
                            fontSize: 50,
                        }}
                    >
                        Login
                    </h4>
                </div>
                <div className="email-login" style={{ backgroundColor: "/#ffffff" }}>
                    <input
                        type="username"
                        className="username-input form-control"
                        style={{ marginTop: 10, height: 50 }}
                        required=""
                        placeholder="Username"
                        minLength={6}
                        onChange={(e) => setInfo({ ...info, username: e.target.value })}
                    />
                    <input
                        type="password"
                        className="password-input form-control"
                        style={{ marginTop: 10 }}
                        required=""
                        placeholder="Password"
                        minLength={6}
                        onChange={(e) => setInfo({ ...info, password: e.target.value })}
                    />
                </div>
                <div className="submit-row" style={{ marginBottom: 8, paddingTop: 0 }}>
                    <button
                        className="btn btn-primary d-block box-shadow w-100"
                        id="submit-id-submit"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <div className="d-flex justify-content-between">
                        <div className="form-check form-check-inline" id="form-check-rememberMe">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formCheck-1"
                                htmlFor="remember"
                                style={{ cursor: "pointer" }}
                                name="check"
                            />
                            <label className="form-check-label" htmlFor="formCheck-1">
                                <span className="label-text">Remember Me</span>
                            </label>
                        </div>
                        <a id="forgot-password-link" href="/#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;
