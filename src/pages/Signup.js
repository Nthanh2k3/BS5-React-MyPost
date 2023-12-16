import React from "react";

class Signup extends React.Component {
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
  <div style={{ padding: 200, width: 1500 }}>
    <form action="/action_page.php">
      <div className="gc004-container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label className="form-label fw-bold" htmlFor="email">
          Email
        </label>
        <input type="text" placeholder="Enter Email" name="email" required="" />
        <label className="form-label fw-bold" htmlFor="psw">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required=""
        />
        <label className="form-label fw-bold" htmlFor="email">
          Repeat Password
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required=""
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="formCheck-1"
            defaultChecked="checked"
            name="remember"
            style={{ marginBottom: 15 }}
          />
          <label className="form-check-label" htmlFor="formCheck-1">
            Remember me
          </label>
        </div>
        <p>
          By creating an account you agree to our&nbsp;
          <a className="gc004-dodgerblue" href="/#">
            Terms &amp; Privacy
          </a>
          .
        </p>
        <div className="gc-clearfix">
          <button className="gc-cancelbtn" type="button">
            Cancel
          </button>
          <button className="gc-signupbtn" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  </div>
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
          <p className="footer-center-info email text-start"> 555-867-5309</p>
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
</>

        ) 
    }
}

export default Signup;