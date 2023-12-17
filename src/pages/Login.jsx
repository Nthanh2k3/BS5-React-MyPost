import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SignupAlert from "../Components/SignupAlert";
import LoginForm from "../Components/LoginForm";
class Login extends React.Component {
    render() {
     return(
        <div>
            <Header/>
            <SignupAlert/>
            <LoginForm/>
            <Footer/>
        </div>
     )
    }
}
export default Login;