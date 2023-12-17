import React from "react";
import { Component } from "react";
function footer() {
    return(
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
  </div>
    )
}
export default footer;