import React from 'react'

function signupForm() {
    return(
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
    )
}

export default signupForm;