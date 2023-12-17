import React from "react";
import Header from "../Components/Header.js";
import TrackingBox from "../Components/TrackingBox.js";
import Service from "../Components/Service.js"
import Pricing from "../Components/Pricing.js";
import AboutUs from "../Components/AboutUs.js";
import Contact from "../Components/Contact.js"
import Footer from "../Components/Footer.js";
class Home extends React.Component {
    render() {
        return(
<div>
  {/*HeaderSection*/}
  <Header/>
  {/*QuickTrackSection*/}
  <TrackingBox/>
  {/*ServiceSection*/}
  <Service/>
  {/*PricingSection*/}
  <Pricing/>
  {/*AboutSection*/}
  <AboutUs/>
  {/*ContactSection*/}
  <Contact/>
  {/*FooterSection*/}
  <Footer/>
  </div>

        )
    }
}

export default Home;