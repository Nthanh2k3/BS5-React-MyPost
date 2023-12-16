import React from "react";

class Home extends React.Component {
    render() {
        return(
<div>
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
  <div className="highlight-clean" style={{ background: "rgb(23,27,44)" }}>
    <p style={{ width: 700, fontSize: 50, padding: 50 }}>
      <strong>Your Lightning Speed Delivery Partner&nbsp;</strong>
    </p>
    <em style={{ padding: 50, fontSize: 25 }}>
      Quick Tracking Your Order Here
    </em>
    <form
      className="search-form"
      style={{
        width: 1000,
        padding: 50,
        height: 186,
        borderColor: "rgba(0,0,0,0.08)"
      }}
    >
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="I am looking for.."
        />
        <button
          className="btn btn-light"
          type="button"
          style={{ width: 200, height: 56, margin: "5px 0px" }}
        >
          Search <i className="fa fa-search" />
        </button>
      </div>
    </form>
    <div />
    <img
      src="/assets/img/hero-bg.png"
      style={{ width: 900, height: 500 }}
      width={1000}
      height={500}
      alt="background1"
    />
    <img src="/assets/img/hero-img.svg" width={422} height={393} alt="background2"/>
  </div>
  <div>
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 style={{ fontFamily: "Adamina, serif", fontSize: 50 }}>
            Our Service
          </h2>
          <p>We are the best at</p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col">
          <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
            <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-truck"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
            <div className="px-3">
              <h4>Fast Delivery</h4>
              <p />
              <a href="/#">
                Learn More&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
            <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -32 576 576"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <path d="M480 80C480 53.49 458.5 32 432 32h-288C117.5 32 96 53.49 96 80V384h384V80zM378.9 166.8l-88 112c-4.031 5.156-10 8.438-16.53 9.062C273.6 287.1 272.7 287.1 271.1 287.1c-5.719 0-11.21-2.019-15.58-5.769l-56-48C190.3 225.6 189.2 210.4 197.8 200.4c8.656-10.06 23.81-11.19 33.84-2.594l36.97 31.69l72.53-92.28c8.188-10.41 23.31-12.22 33.69-4.062C385.3 141.3 387.1 156.4 378.9 166.8zM528 288H512v112c0 8.836-7.164 16-16 16h-416C71.16 416 64 408.8 64 400V288H48C21.49 288 0 309.5 0 336v96C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48v-96C576 309.5 554.5 288 528 288z" />
              </svg>
            </div>
            <div className="px-3">
              <h4>Keep Track In Real-Time</h4>
              <p />
              <a href="/#">
                Learn More&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
            <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <path d="M432 48H208C190.3 48 176 62.33 176 80V96H128V80C128 35.82 163.8 0 208 0H432C476.2 0 512 35.82 512 80V304C512 348.2 476.2 384 432 384H416V336H432C449.7 336 464 321.7 464 304V80C464 62.33 449.7 48 432 48zM320 128C355.3 128 384 156.7 384 192V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H320zM64 464H320C328.8 464 336 456.8 336 448V256H48V448C48 456.8 55.16 464 64 464z" />
              </svg>
            </div>
            <div className="px-3">
              <h4>Store Order Data</h4>
              <p />
              <a href="/#">
                Learn More&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 style={{ fontFamily: "Adamina, serif", fontSize: 50 }}>
            Pricing
          </h2>
          <p>We provide 3 main plan for you to choose</p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-xl-flex">
        <div className="col">
          <div className="card mb-4">
            <div className="card-body text-center p-4">
              <h4 className="fw-bold card-subtitle">Standard</h4>
              <h4 className="display-5 fw-bold card-title">10$</h4>
              <p>For Individual or small enterprise</p>
              <a className="btn btn-light d-block w-100" role="button" href="/#">
                Choose
              </a>
            </div>
          </div>
          <div className="bg-light border rounded border-light p-4">
            <ul className="list-unstyled">
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Cost Effective</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Online Tracking</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Regular Update</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card border-primary border-2 mb-4">
            <div className="card-body text-center p-4">
              <span className="badge rounded-pill bg-primary position-absolute top-0 start-50 translate-middle text-uppercase">
                Most Popular
              </span>
              <h4 className="fw-bold card-subtitle">Pro</h4>
              <h4 className="display-5 fw-bold card-title">$38</h4>
              <p>For medium enterprise</p>
              <a
                className="btn btn-primary d-block w-100"
                role="button"
                href="/#"
              >
                Choose
              </a>
            </div>
          </div>
          <div className="bg-light border rounded border-light p-4">
            <ul className="list-unstyled">
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Expedited Shipping</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Priority Handling</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Dedicated Support</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Guaranteed Delivery Date</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>
                  Perfect for urgent shipments or businesses that prioritize
                  speedy delivery and exceptional service.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4">
            <div className="card-body text-center p-4">
              <h4 className="fw-bold card-subtitle">Enterprise</h4>
              <h4 className="display-5 fw-bold card-title">
                $70
                <span className="fs-4 fw-normal text-muted" />
              </h4>
              <p>For big company and large enterprise</p>
              <a className="btn btn-dark d-block w-100" role="button" href="/#">
                Choose
              </a>
            </div>
          </div>
          <div className="bg-light border rounded border-light p-4">
            <ul className="list-unstyled">
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>All Pro Plan Benefits</span>
              </li>
              <li className="d-flex mb-2">
                <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2">
                  <i className="fa fa-check" />
                </span>
                <span>Additional Warranty for your Delivery&nbsp;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="container py-4 py-xl-5">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <img
            className="rounded w-100 h-100 fit-cover"
            style={{ minHeight: 300 }}
            src="/assets/img/about.jpg"
            alt="about us"
          />
        </div>
        <div className="col d-flex flex-column justify-content-center p-4">
          <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
            <div>
              <h4 style={{ fontSize: 50, fontFamily: "Adamina, serif" }}>
                About Us
              </h4>
              <p>
                Welcome to MyPost , where excellence in logistics meets
                unparalleled commitment to service. With a foundation built on
                reliability, innovation, and customer satisfaction, we stand as
                a leading force in the logistics industry.
                <br />
                <br />
                At MyPost, we understand the intricate dance of supply chain
                management, and we have mastered the art of seamless
                transportation. Our dedicated team of professionals ensures that
                your cargo, no matter how intricate or extensive, reaches its
                destination with precision and efficiency.
                <br />
                <br />
                What sets us apart is not just our state-of-the-art technology
                or expansive network, but our unwavering commitment to exceeding
                expectations. We pride ourselves on being more than just a
                logistics company; we are your strategic partner in navigating
                the complexities of global trade.
                <br />
                <br />
                Our values center around trust, transparency, and timeliness.
                From the moment your shipment is entrusted to us, you can rest
                assured that it is in capable hands. We believe in fostering
                long-term relationships with our clients, understanding their
                unique needs, and delivering solutions that go beyond
                conventional logistics.
                <br />
                <br />
                Explore a world of seamless transportation with MyPost.
                Experience the difference of a logistics partner that
                prioritizes your success. Your journey begins with us — where
                every shipment is more than a delivery; it's a commitment to
                excellence.
                <br />
                <br />
              </p>
              <a href="/#">
                Learn More&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5" />
        </div>
      </div>
    </div>
  </div>
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
  </div>

        )
    }
}

export default Home;