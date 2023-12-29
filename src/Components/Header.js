import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Header() {
    const handleNavItemClick = (sectionId) => {
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <header classname="">
            <nav
                className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button "
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
                        <a className="navbar-brand" href="/home">
                            <span style={{ fontFamily: "Cookie, serif", fontSize: 50 }}>
                                MyPost
                            </span>
                        </a>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="navbar-nav nav-right">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/home"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#AboutSection"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                    onClick={() => handleNavItemClick("aboutUsSection")}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#ServiceSection"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                    onClick={() => handleNavItemClick("serviceSection")}
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
                                    href="#PricingSection"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                    onClick={() => handleNavItemClick("pricingSection")}
                                >
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#ContactSection"
                                    style={{ color: "rgba(224,217,217,0.9)" }}
                                    onClick={() => handleNavItemClick("contactSection")}
                                >
                                    Contact&nbsp;
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="ms-auto navbar-text actions">
                        <Link
                            className="btn btn-light action-button"
                            role="button"
                            style={{
                                color: "rgba(0,0,0,0.9)",
                                background: "var(--bs-gray-200)",
                                borderRadius: 10,
                                borderStyle: "solid",
                                borderColor: "rgba(0,0,0,0.9)",
                                fontSize: 28,
                                padding: "5px 8px",
                                fontFamily: "Cookie, serif",
                            }}
                            to={"/login"}
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </nav>
        </header>
    );
}
export default Header;
