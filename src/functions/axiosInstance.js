import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/", // Set the base URL for all requests
    timeout: 10000, // Set a timeout for requests in milliseconds
    headers: {
        "ngrok-skip-browser-warning": "123456", // Skip
        "Content-Type": "application/json", // Set default headers for all requests
        // Add any authentication headers
    },
});

export default axiosInstance;