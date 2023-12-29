import React from "react";
import { Avatar, Button, IconButton, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

function HeaderWarehouseManager() {
    const navigate = useNavigate();
    const handleSignOut = () => {
        Cookies.remove("jwt");
        Cookies.remove("role");
        navigate("/home");
    };
    return (
        <header>
            <nav
                className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button"
                style={{
                    background: "rgb(34, 34, 34)",
                    borderStyle: "none",
                    paddingTop: 0,
                    paddingBottom: 10,
                }}
            >
                <Link className="navbar-brand p-50" to="/warehouseManager">
                    <span
                        style={{
                            fontFamily: "Cookie, serif",
                            fontSize: 50,
                            textAlign: "left",
                            padding: 30,
                        }}
                    >
                        MyPost
                    </span>
                </Link>
                <div style={{ display: "flex", flexDirection: "row", marginLeft: "auto" }}>
                    <Avatar src="/assets/img/Boss.jpg" alt="avatar" style={{}} />
                    <Button onClick={handleSignOut}>
                        <img
                            src="/assets/img/white-logout.svg"
                            alt="logout"
                            style={{ width: 22, height: 22 }}
                        />
                    </Button>
                </div>
            </nav>
        </header>
    );
}
export default HeaderWarehouseManager;
