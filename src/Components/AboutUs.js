import React from "react";
import { Component } from "react";
function AboutUs(){
    return(
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
    )
}
export default AboutUs;