import React from "react";
import { Component } from "react";
function Contact() {
    return(
        <div>
    <div>
      <div className="container-fluid">
        <h1 style={{ textAlign: "center", fontFamily: "Adamina, serif" }}>
          Contact Us
        </h1>
        <hr />
        <form id="contactForm-1" action="javascript:void(0);" method="get">
          <input
            className="form-control"
            type="hidden"
            name="Introduction"
            defaultValue="This email was sent from www.awebsite.com"
          />
          <input
            className="form-control"
            type="hidden"
            name="subject"
            defaultValue="Awebsite.com Contact Form"
          />
          <input
            className="form-control"
            type="hidden"
            name="to"
            defaultValue="email@awebsite.com"
          />
          <div className="row">
            <div className="col-md-6">
              <div id="successfail-1" />
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-md-6"
              id="message-1"
              style={{ padding: "50px 50px" }}
            >
              <h2 className="h4">
                <i className="fa fa-envelope" /> Contact Us
                <small>
                  <small className="required-input">&nbsp;(*required)</small>
                </small>
              </h2>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="from-name">
                  Name
                </label>
                <span className="required-input">*</span>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa fa-address-card" />
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    id="from-name-1"
                    name="name"
                    required=""
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="from-email">
                  Email
                </label>
                <span className="required-input">*</span>
                <div className="input-group">
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                      />
                    </svg>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    id="from-email-1"
                    name="email"
                    required=""
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                  <div className="form-group mb-3">
                    <label className="form-label" htmlFor="from-phone">
                      Phone
                    </label>
                    <span className="required-input">*</span>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa fa-phone" />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        id="from-phone-1"
                        name="phone"
                        required=""
                        placeholder="Primary Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                  <div className="form-group mb-3">
                    <label className="form-label" htmlFor="from-calltime">
                      Best Time to Call
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                      <select
                        className="form-select"
                        id="from-calltime-1"
                        name="call time"
                      >
                        <optgroup label="Best Time to Call">
                          <option value="Morning" selected="">
                            Morning
                          </option>
                          <option value="Afternoon">Afternoon</option>
                          <option value="Evening">Evening</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="from-comments">
                  Comments
                </label>
                <textarea
                  className="form-control"
                  id="from-comments-1"
                  name="comments"
                  placeholder="Enter Comments"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-primary d-block w-100"
                      type="reset"
                    >
                      <i className="fa fa-undo" /> Reset
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-primary d-block w-100"
                      type="submit"
                    >
                      Submit <i className="fa fa-chevron-circle-right" />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="d-flex d-md-none" />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="h4">
                <i className="fa fa-location-arrow" /> Locate Us
                <img
                  src="/assets/img/Screenshot%202023-12-15%20at%2016.53.53.png"
                  width={959}
                  height={660}
                  style={{ width: 800, height: 500 }}
                  alt="map"
                />
              </h2>
              <div className="row">
                <div className="col-12">
                  <div className="static-map">
                    <a
                      rel="noopener"
                      href="https://www.google.com/maps/place/Daytona+International+Speedway/@29.1815062,-81.0744275,15z/data=!4m13!1m7!3m6!1s0x88e6d935da1cced3:0xa6b3e1bc0f2fc83a!2s1801+W+International+Speedway+Blvd,+Daytona+Beach,+FL+32114!3b1!8m2!3d29.187028!4d-81.0703076!3m4!1s0x88e6d949a4cb8593:0x1387c6c0b5c8cc97!8m2!3d29.1851681!4d-81.0705292"
                      target="_blank"
                    >
                      {" "}
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h2 className="h4">
                    <i className="fa fa-user" /> Our Info
                  </h2>
                  <div>
                    <span>
                      <strong>MyPost Inc</strong>
                    </span>
                  </div>
                  <div>
                    <span>support@mypost.com</span>
                  </div>
                  <div>
                    <span>www.mypost.com</span>
                  </div>
                  <hr className="d-sm-none d-md-block d-lg-none" />
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h2 className="h4">
                    <i className="fa fa-location-arrow" /> Our Address
                  </h2>
                  <div>
                    <span>
                      <strong>HeadQuarter</strong>
                    </span>
                  </div>
                  <div>
                    <span>8XMR+VC Cupertino, California, USA</span>
                  </div>
                  <div>
                    <span />
                  </div>
                  <div>
                    <abbr
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Office Phone: 555-867-5309"
                    >
                      O:
                    </abbr>{" "}
                    555-867-5309
                  </div>
                  <hr className="d-sm-none" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="modal fade" role="dialog" tabIndex={-1} id="modal1">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Contact Information</h4>
              <button
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <form
                id="contactForm-2"
                action="javascript:void(0);"
                method="get"
              >
                <input
                  className="form-control"
                  type="hidden"
                  name="Introduction"
                  defaultValue="This email was sent from www.awebsite.com"
                />
                <input
                  className="form-control"
                  type="hidden"
                  name="subject"
                  defaultValue="Awebsite.com Contact Form"
                />
                <input
                  className="form-control"
                  type="hidden"
                  name="to"
                  defaultValue="email@awebsite.com"
                />
                <div className="row">
                  <div className="col-md-6">
                    <div id="successfail-2" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6" id="message-2">
                    <h2 className="h4">
                      <i className="fa fa-envelope" /> Contact Us
                      <small>
                        <small className="required-input">
                          &nbsp;(*required)
                        </small>
                      </small>
                    </h2>
                    <div className="form-group mb-3">
                      <label className="form-label" htmlFor="from-name">
                        Name
                      </label>
                      <span className="required-input">*</span>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa fa-user-o" />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          id="from-name-2"
                          name="name"
                          required=""
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label" htmlFor="from-email">
                        Email
                      </label>
                      <span className="required-input">*</span>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa fa-envelope-o" />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          id="from-email-2"
                          name="email"
                          required=""
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                        <div className="form-group mb-3">
                          <label className="form-label" htmlFor="from-phone">
                            Phone
                          </label>
                          <span className="required-input">*</span>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa fa-phone" />
                            </span>
                            <input
                              className="form-control"
                              type="text"
                              id="from-phone-2"
                              name="phone"
                              required=""
                              placeholder="Primary Phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                        <div className="form-group mb-3">
                          <label className="form-label" htmlFor="from-calltime">
                            Best Time to Call
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fa fa-clock-o" />
                              </span>
                            </div>
                            <select
                              className="form-select"
                              id="from-calltime-2"
                              name="call time"
                            >
                              <optgroup label="Best Time to Call">
                                <option value="Morning" selected="">
                                  Morning
                                </option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label" htmlFor="from-comments">
                        Comments
                      </label>
                      <textarea
                        className="form-control"
                        id="from-comments-2"
                        name="comments"
                        placeholder="Enter Comments"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="row">
                        <div className="col">
                          <button
                            className="btn btn-primary d-block w-100"
                            type="reset"
                          >
                            <i className="fa fa-undo" /> Reset
                          </button>
                        </div>
                        <div className="col">
                          <button
                            className="btn btn-primary d-block w-100"
                            type="submit"
                          >
                            Submit <i className="fa fa-chevron-circle-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="d-flex d-md-none" />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className="h4">
                      <i className="fa fa-location-arrow" /> Locate Us
                    </h2>
                    <div className="row">
                      <div className="col-12">
                        <div className="static-map">
                          <a
                            rel="noopener"
                            href="https://www.google.com/maps/place/Daytona+International+Speedway/@29.1815062,-81.0744275,15z/data=!4m13!1m7!3m6!1s0x88e6d935da1cced3:0xa6b3e1bc0f2fc83a!2s1801+W+International+Speedway+Blvd,+Daytona+Beach,+FL+32114!3b1!8m2!3d29.187028!4d-81.0703076!3m4!1s0x88e6d949a4cb8593:0x1387c6c0b5c8cc97!8m2!3d29.1851681!4d-81.0705292"
                            target="_blank"
                          >
                            {" "}
                            <img
                              className="img-fluid"
                              src="http://maps.googleapis.com/maps/api/staticmap?autoscale=2&size=600x210&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C582+1801+W+International+Speedway+Blvd+Daytona+Beach+FL+32114&zoom=12"
                              alt="Google Map of Daytona International Speedway"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <h2 className="h4">
                          <i className="fa fa-user" /> Our Info
                        </h2>
                        <div>
                          <span>
                            <strong>Name</strong>
                          </span>
                        </div>
                        <div>
                          <span>email@awebsite.com</span>
                        </div>
                        <div>
                          <span>www.awebsite.com</span>
                        </div>
                        <hr className="d-sm-none d-md-block d-lg-none" />
                      </div>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <h2 className="h4">
                          <i className="fa fa-location-arrow" /> Our Address
                        </h2>
                        <div>
                          <span>
                            <strong>Office Name</strong>
                          </span>
                        </div>
                        <div>
                          <span>55 Icannot Dr</span>
                        </div>
                        <div>
                          <span>Daytone Beach, FL 85150</span>
                        </div>
                        <div>
                          <abbr
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Office Phone: 555-867-5309"
                          >
                            O:
                          </abbr>{" "}
                          555-867-5309
                        </div>
                        <hr className="d-sm-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Contact;