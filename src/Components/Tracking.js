import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const customHeaders = {
    "ngrok-skip-browser-warning": "123456",
    // Add any other headers you need
};

// Axios configuration object
const axiosConfig = {
    method: "get",
    headers: customHeaders,
};

export default function Tracking() {
    const [orderId, setOrderId] = useState("");
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // Gọi API và cập nhật state khi component được render
        fetchData();
    }, [orderId]); // Mảng dependencies trống rỗng, chỉ gọi một lần sau khi component được render đầu tiên

    const fetchData = async () => {
        try {
            const response = await axios.request(
                ` https://uniformly-mighty-mite.ngrok-free.app/orders/id=${orderId}`,
                axiosConfig
            );
            // Handle the response data
            console.log(response.data);
            setOrderData(response.data);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };
    const handleInputChange = () => {
        setOrderId(document.getElementById("orderIdInput").value);
    };

    return (
        <div>
            <Header />
            <div class="flex justify-center mt-10 w-full font-quick">
                <div class="flex flex-col items-center w-full">
                    <div class="flex flex-row max-w-5xl justify-between w-full">
                        <div class="flex flex-col w-1/3">
                            <div class="">
                                <label>
                                    <p class="font-bold mb-3 text-2xl">Tracking Number</p>
                                </label>
                                <input
                                    type="text"
                                    id="orderIdInput"
                                    placeholder="Enter Order ID"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div class="mt-3">
                                <button
                                    onClick={handleInputChange}
                                    type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                                >
                                    Tracking
                                    <svg
                                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="w-1/3">
                            <img
                                src="https://viettelpost.vn/viettelpost-iframe/assets/images/tracking-img.svg"
                                alt="Tracking"
                            />
                        </div>
                    </div>
                    <div class="">
                        {orderData.order ? (
                            <>
                                <h1 class="m-3">{orderData.order.senderName}</h1>
                                <h1 class="m-3">{orderData.order.recipientName}</h1>
                                {/* Render other order details as needed */}
                            </>
                        ) : (
                            <div>
                                <p class="m-3">Nothing found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
