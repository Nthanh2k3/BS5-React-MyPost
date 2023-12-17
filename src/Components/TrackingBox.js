import React from "react";
import { Component } from "react";
function TrackingBox() {
    return(
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
    )
}
export default TrackingBox;