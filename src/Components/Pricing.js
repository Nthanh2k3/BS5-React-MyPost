import React from "react";
import { Component } from "react";
function Pricing() {
    return(
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
    )
}
export default Pricing;