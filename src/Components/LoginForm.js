import React from "react";

function LoginForm() {
    return(
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
    )
}
export default LoginForm;