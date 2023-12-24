import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../functions/axiosInstance";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tracking() {
    const [orderId, setOrderId] = useState("");
    const [orderData, setOrderData] = useState([]);
    const [timeEvents, setTimeEvents] = useState([]);
    const events = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    useEffect(() => {
        // Gọi API và cập nhật state khi component được render
        fetchData();
    }, [orderId]); // Mảng dependencies trống rỗng, chỉ gọi một lần sau khi component được render đầu tiên

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`orders/id=${orderId}`);
            // Handle the response data
            setOrderData(response.data);
            setTimeEvents(response.data.order.processTime);
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
                                    <p class="font-bold mb-3 text-2xl font-quick">
                                        Tracking Number
                                    </p>
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
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase font-quick w-auto"
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
                    <div class=" justify-center w-[70%] pt-10">
                        {orderData.order ? (
                            <>
                                <TrackInfo events={timeEvents} />
                            </>
                        ) : (
                            <div class="p-10">
                                <TrackInfo events={timeEvents} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const destinations = [
    {
        name: "Quận Cầu Giấy",
        type: "Điểm giao dịch",
    },
    {
        name: "Hà Nội",
        type: "Điểm tập kết",
    },
    {
        name: "Hồ Chí Minh",
        type: "Điểm tập kết",
    },
    {
        name: "Quận Thủ Đức",
        type: "Điểm giao dịch",
    },
];

function TrackInfo({ events }) {
    return (
        <div className="container font-quick border-solid border-collapse border border-slate-500 p-4">
            <h1 className="text-4xl font-quick mb-2 font-bold">Order History</h1>
            <hr className="my-8 bg-gray-200 border-b-4 w-full" />
            <table className="table-auto w-full text-sm text-left font-quick">
                <thead className="font-quick">
                    <tr>
                        <th className="font-quick text-center text-2xl">Trạng thái</th>
                        <th className="font-quick text-center text-2xl">Chi tiết</th>
                        <th className="font-quick text-center text-2xl">Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td>
                                <i className="fa-solid fa-truck-fast fa-xl p-3"></i>
                            </td>
                            <td className="font-quick">
                                {renderContentBasedOnIndex(index, destinations)}
                            </td>
                            <td className="font-bold font-quick">{events[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function renderContentBasedOnIndex(index, destinations) {
    switch (index) {
        case 0:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm giao dịch {destinations[index / 2].name}
                </div>
            );
        case 1:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm giao dịch {destinations[(index - 1) / 2].name} và đang
                    được chuyển đển điểm tập kết {destinations[(index - 1) / 2 + 1].name}
                </div>
            );
        case 2:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm tập kết {destinations[index / 2].name}
                </div>
            );
        case 3:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm tập kết {destinations[(index - 1) / 2].name} và đang được
                    chuyển đển điểm tập kết {destinations[(index - 1) / 2 + 1].name}
                </div>
            );
        case 4:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm tập kết {destinations[index / 2].name}
                </div>
            );
        case 5:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm tập kết {destinations[(index - 1) / 2].name} và đang được
                    chuyển đển điểm giao dịch {destinations[(index - 1) / 2 + 1].name}
                </div>
            );
        case 6:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm giao dịch {destinations[index / 2].name}
                </div>
            );
        case 7:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm giao dịch {destinations[(index - 1) / 2].name} và đang
                    được chuyển đến người nhận
                </div>
            );
        case 8:
            return <div class="font-quick">Hàng đã được chuyển đến người nhận.</div>;
        default:
            return <div>Default content</div>;
    }
}
