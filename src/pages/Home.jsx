import React from "react";
import Header from "../Components/Header.js";
import TrackingBox from "../Components/TrackingBox.js";
import Service from "../Components/Service.js"
import Pricing from "../Components/Pricing.js";
import AboutUs from "../Components/AboutUs.js";
import Contact from "../Components/Contact.js"
import Footer from "../Components/Footer.js";
import { Outlet } from "react-router-dom";
class Home extends React.Component {
    render() {
        return(
<div>
  {/*HeaderSection*/}
  <div className="fixed w-full z-50">
  <Header/>
  </div>
  {/*QuickTrackSection*/}
  <div id="trackingBox">
  <TrackingBox/>
  </div>
  {/*ServiceSection*/}
  <div id="serviceSection">
  <Service/>
  </div>
  {/*PricingSection*/}
  <div id="pricingSection">
  <Pricing/>
  </div>
  {/*AboutSection*/}
  <div id="aboutUsSection">
  <AboutUs/>
  </div>
  {/*ContactSection*/}
  <div id= "contactSection">
  <Contact/>
  </div>
  {/*FooterSection*/}
  <Footer/>

  </div>

        )
    }
}

export default Home;