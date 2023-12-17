import React from "react";
import { Component } from "react";
function Header () {
    return(
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
        <div
          className="collapse navbar-collapse"
          id="navcol-1"
          style={{ color: "rgb(255,255,255)" }}
        >
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
          <p className="ms-auto navbar-text actions">
            {" "}
            <a
              className="login"
              href="/login.html"
              style={{ color: "rgba(224,217,217,0.9)" }}
            >
              Log In
            </a>
            <a
              className="btn btn-light action-button"
              role="button"
              href="/signup.html"
              style={{
                color: "rgba(0,0,0,0.9)",
                background: "var(--bs-gray-200)",
                borderRadius: 10,
                borderStyle: "solid",
                borderColor: "rgba(0,0,0,0.9)",
                fontSize: 16,
                padding: "5px 8px"
              }}
            >
              Sign Up
            </a>
          </p>
          <ul className="navbar-nav">
            <li className="nav-item" />
            <li className="nav-item" />
            <li className="nav-item" />
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item" />
            <li className="nav-item" />
            <li className="nav-item" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
    )
}
export default Header;