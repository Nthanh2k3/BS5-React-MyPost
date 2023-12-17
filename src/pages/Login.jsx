import React, { useState } from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SignupAlert from "../Components/SignupAlert";
import LoginForm from "../Components/LoginForm";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInJvbGUiOiJjaHVfYnV1X2N1YyIsImlhdCI6MTcwMjgwNTkwOH0.TzvbEH8Mc9cjIWaheL6a37EJEVtS61DT5uYyjxQpjB4";
// const decoded = jwtDecode(token);

// console.log(decoded);

function Login() {
    // const [token, setToken] = useState("")
    
        
    // const axiosConfig = {
    //     method: "post",
    //     data: {
    //         "username": "nam",
    //         "password": "nam"
    //     } ,
    // };
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.request(
    //             `https://uniformly-mighty-mite.ngrok-free.app/user/login`,
    //             axiosConfig
    //         );
    //         // Handle the response data
    //         console.log(response.data);
    //         setToken(response.data.token)
    //     } catch (error) {
    //         // Handle errors
    //         console.error("Error fetching data:", error);
    //     }
    // };
    
    // fetchData()

    return(
    <div>
        <Header/>
        {/* <SignupAlert/> */}
        <LoginForm/>
        <Footer/>
    </div>
 )
}
export default Login;