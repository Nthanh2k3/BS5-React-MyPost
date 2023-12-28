import React, { useEffect, useState } from "react";
import axiosInstance from "../functions/axiosInstance";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router";
import * as orderService from "../apiService/orderService";
import { faListSquares } from "@fortawesome/free-solid-svg-icons";

export default function TrackingWithID() {
    const [orderData, setOrderData] = useState([]);
    const [timeEvents, setTimeEvents] = useState([]);
    const [timeSuccess, setTimeSuccess] = useState("");
    const [path, setPath] = useState([]);
    const param = useParams();
    const [orderId, setOrderId] = useState(atob(param.id));
    const navigate = useNavigate();

    useEffect(() => {
        // Gọi API và cập nhật state khi component được render
        fetchData();
    }, [orderId]); // Mảng dependencies trống rỗng, chỉ gọi một lần sau khi component được render đầu tiên

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`orders/id=${orderId}`);
            const path = await orderService.getPathOfOrder(orderId);
            console.log(path);
            setPath(path);
            // Handle the response data
            setOrderData(response.data);
            setTimeEvents(response.data.order.processTime);

            console.log(response.data.order.timeSuccess);
            setTimeSuccess(response.data.order.timeSuccess);
            console.log(timeSuccess);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };
    const handleInputChange = () => {
        setOrderId(document.getElementById("orderIdInput").value);
        const encodeId = btoa(document.getElementById("orderIdInput").value);
        navigate(`/tracking/${encodeId}`);
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
                                <TrackInfo
                                    events={timeEvents}
                                    paths={path}
                                    timeSuccess={timeSuccess}
                                />
                            </>
                        ) : (
                            <div class="p-10">Nothing found</div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function TrackInfo({ events, paths, timeSuccess }) {
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
                            <td className="text-center">
                                <i className="fa-solid fa-truck-fast fa-xl p-3"> </i>
                            </td>
                            <td className="font-quick">
                                {renderContentBasedOnIndex(index, paths)}
                            </td>
                            <td className="font-bold font-quick text-center">
                                {events[index].substring(0, 10)}
                            </td>
                        </tr>
                    ))}
                    {timeSuccess != undefined && renderTimeSuccess(timeSuccess)}
                </tbody>
            </table>
        </div>
    );
}

function renderTimeSuccess(timeSuccess) {
    return (
        <tr>
            <td className="text-center">
                <i className="fa-solid fa-truck-fast fa-xl p-3"></i>
            </td>
            <td>
                <div>Hàng đã được chuyển đến người nhận thành công</div>
            </td>
            <td className="font-bold font-quick text-center">{timeSuccess.substring(0, 10)}</td>
        </tr>
    );
}

function renderContentBasedOnIndex(index, path) {
    if (index > 7 && index % 2 == 0) {
        return (
            <div class="font-quick">
                Giao hàng đến người nhận thất bại và trở về {path.po2.district}
            </div>
        );
    }
    if (index > 7 && index % 2 == 1) {
        return (
            <div class="font-quick">
                Hàng đã rời khỏi điểm giao dịch {path.po2.district} và đang được chuyển đến người
                nhận
            </div>
        );
    }

    switch (index) {
        case 0:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm giao dịch {path.po1.district}
                </div>
            );
        case 1:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm giao dịch {path.po1.district} và đang được chuyển đển điểm
                    tập kết {path.wh1.province}
                </div>
            );
        case 2:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm tập kết {path.wh1.province}
                </div>
            );
        case 3:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm tập kết {path.wh1.province} và đang được chuyển đển điểm
                    tập kết {path.wh2.province}
                </div>
            );
        case 4:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm tập kết {path.wh2.province}
                </div>
            );
        case 5:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm tập kết {path.wh2.province} và đang được chuyển đển điểm
                    giao dịch {path.po2.district}
                </div>
            );
        case 6:
            return (
                <div class="font-quick">
                    Hàng đã được chuyển đến điểm giao dịch {path.po2.district}
                </div>
            );
        case 7:
            return (
                <div class="font-quick">
                    Hàng đã rời khỏi điểm giao dịch {path.po2.district} và đang được chuyển đến
                    người nhận
                </div>
            );

        default:
            return <div>Default content</div>;
    }
}
