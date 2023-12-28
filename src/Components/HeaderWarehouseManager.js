import React from "react";
import { Avatar , Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HeaderWarehouseManager() {
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
                <div className="container">
                    <button
                        data-bs-toggle="collapse"
                        className="navbar-toggler"
                        data-bs-target="/#navcol-1"
                    >
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div>
                        <a className="navbar-brand" href="/#">
                            <span style={{ fontFamily: "Cookie, serif", fontSize: 50 }}>
                                MyPost
                            </span>{" "}
                        </a>
                    </div>
                    <div>
                        <ul className="navbar-nav nav-right">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="/index.html"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="about.html"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="faq.html"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                >
                                    Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                    to={"/tracking"}
                                >
                                    Tracking
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="contact.html"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                >
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="/index.html"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                >
                                    Contact&nbsp;
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar src="/assets/img/Boss.jpg" alt="avatar" />
                        
                            <Typography variant="h6">Warehouse Manager</Typography>
                            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" style={{color: "#ffffff",}} />
                    </div>
                    
                    <div>

                    </div>
                </div>
            </nav>
        </header>
    );
}
export default HeaderWarehouseManager;
