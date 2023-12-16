import React from "react";

class Login extends React.Component {
    render() {
     return(
<>
  <header>
    <nav
      className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button"
      style={{
        background: "rgb(34, 34, 34)",
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderStyle: "none",
        paddingTop: 0,
        paddingBottom: 10
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
  <div>
    <section className="py-4 py-xl-5">
      <div className="container h-100">
        <div className="text-white bg-primary border rounded border-0 p-4 py-5">
          <div className="row h-100">
            <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <h1 className="text-uppercase fw-bold text-white mb-3">
                  Sign in to take advantage of all services
                </h1>
                <p className="mb-4">
                  If you don't have an account, please Sign Up
                </p>
                <button className="btn btn-light fs-5 py-2 px-4" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div>
    <div className="d-flex flex-column justify-content-center" id="login-box">
      <div className="login-box-header">
        <h4
          style={{
            color: "rgb(0,0,0)",
            marginBottom: 0,
            fontWeight: 400,
            fontSize: 40
          }}
        >
          Login
        </h4>
      </div>
      <div className="login-box-content">
        <div className="fb-login box-shadow">
          <a
            className="d-flex flex-row align-items-center social-login-link"
            href="/#"
          >
            <i
              className="fa fa-facebook"
              style={{
                marginLeft: 0,
                paddingRight: 20,
                paddingLeft: 22,
                width: 56
              }}
            />
            Login with Facebook
          </a>
        </div>
        <div className="gp-login box-shadow">
          <a
            className="d-flex flex-row align-items-center social-login-link"
            style={{ marginBottom: 10 }}
            href="/#"
          >
            <i
              className="fa fa-google"
              style={{ color: "rgb(255,255,255)", width: 56 }}
            />
            Login with Google+
          </a>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center login-box-seperator-container">
        <div className="login-box-seperator" />
        <div className="login-box-seperator-text">
          <p
            style={{
              marginBottom: 0,
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: 400,
              color: "rgb(201,201,201)"
            }}
          >
            or
          </p>
        </div>
        <div className="login-box-seperator" />
      </div>
      <div className="email-login" style={{ backgroundColor: "/#ffffff" }}>
        <input
          type="email"
          className="email-imput form-control"
          style={{ marginTop: 10 }}
          required=""
          placeholder="Email"
          minLength={6}
        />
        <input
          type="password"
          className="password-input form-control"
          style={{ marginTop: 10 }}
          required=""
          placeholder="Password"
          minLength={6}
        />
      </div>
      <div className="submit-row" style={{ marginBottom: 8, paddingTop: 0 }}>
        <button
          className="btn btn-primary d-block box-shadow w-100"
          id="submit-id-submit"
          type="submit"
        >
          Login
        </button>
        <div className="d-flex justify-content-between">
          <div
            className="form-check form-check-inline"
            id="form-check-rememberMe"
          >
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
      <div
        id="login-box-footer"
        style={{ padding: "10px 20px", paddingBottom: 23, paddingTop: 18 }}
      >
        <p style={{ marginBottom: 0 }}>
          Don't you have an account?
          <a id="register-link" href="/#">
            Sign Up!
          </a>
        </p>
      </div>
    </div>
  </div>
  <div>
    <div>
      <footer>
        <div className="row">
          <div className="col-sm-6 col-md-4 footer-navigation">
            <h3>MyPost</h3>
            <p className="links">
              <a href="/#">Home</a>
              <strong> · </strong>
              <a href="/#">About</a>
              <strong> · </strong>
              <a href="/#">Service</a>
              <strong> · </strong>
              <a href="/#">Pricing</a>
              <strong> · </strong>
              <a href="/#" />
              <strong>&nbsp;</strong>
              <a href="/#">Contact</a>
            </p>
            <p className="company-name">MyPost © 2023</p>
          </div>
          <div className="col-sm-6 col-md-4 footer-contacts">
            <div>
              <span className="fa fa-map-marker footer-contacts-icon"> </span>
              <p>
                <span className="new-line-span">8XMR+VC Cupertino</span>
                California,USA
              </p>
            </div>
            <div>
              <i className="fa fa-phone footer-contacts-icon" />
              <p className="footer-center-info email text-start">
                {" "}
                555-867-5309
              </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon" />
              <p>
                {" "}
                <a href="/#" target="_blank">
                  support@mypost.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4 footer-about">
            <h4>Get the latest news from us</h4>
            <p />
            <div className="social-links social-icons">
              <a href="/#">
                <i className="fa fa-facebook-f" style={{ fontSize: 24 }} />
              </a>
              <a href="/#">
                <i className="fa fa-twitter" />
              </a>
              <a href="/#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="/#">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</>

        )
    }
}
export default Login;