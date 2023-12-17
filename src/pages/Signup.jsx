import React from "react";
import Header from "../Components/Header";
import SignupForm from "../Components/SignupForm";
import Footer from "../Components/Footer";
class Signup extends React.Component {
    render() {
        return(
          <div>
            <Header/>
            <SignupForm/>
            <Footer/>
          </div>
        )
    }
}

export default Signup;