import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { Typography } from "@material-tailwind/react";
function TrackingBox() {
    return(
      <>
      
      <div className="highlight-clean" style={{ background: "rgb(23,27,44)", backgroundSize: "cover", position: "relative" }}>
        <Typography style={{fontSize: 70, fontFamily:"sans-serif", paddingTop: 50, textAlign:"right", paddingRight: 20}}>Your Lightning Speed Transporter</Typography>
    <img
        src="./assets/img/hero-img.SVG"
        alt="background"
        style={{ zIndex: 1, width: "auto", height: "auto", right: 0, top: 0  }}
        className="background-image"
    />
    <img
        src="./assets/img/hero-bg.PNG"
        alt="background-overlay"
        style={{ zIndex: 2, width: "auto", height: "auto", position: "absolute", top: 0, right: 0 }}
        className="overlay-image"
    />
  
  

    {/* Bạn có thể thêm nội dung hoặc phần tử khác tại đây nếu cần */}
</div>
</>

    )
}
export default TrackingBox;