import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosInstance from "../../functions/axiosInstance";
import PieChart from "../../Components/PieChart";

export default function StatisticWarehouse() {
    const params = useParams();
    const warehouseId = params.id;
    const [province, setProvince] = useState();
    const [totalInsideOrder, setTotalInsideOrder] = useState("");
    const [totalSendedOrder, setTotalSendedOrder] = useState("");
    const [orders, setOrders] = useState([
        {
            id: "",
            sender: "",
            recipent: "",
            status: "",
        },
    ]);
    const columns = [
        {
            name: "OrderID",
            selector: (row) => row.id,
            sortable: true,
            width: "25%",
        },
        {
            name: "Sender",
            selector: (row) => row.sender,
            sortable: true,
        },
        {
            name: "Recipent",
            selector: (row) => row.recipent,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
    ];

    const customStyles = {
        header: {
            style: {
                minHeight: "56px",
            },
        },
        headRow: {
            style: {
                backgroundColor: "#99ccff",
            },
        },
        headCells: {
            style: {
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Quicksand",
            },
        },
        cells: {
            style: {
                fontFamily: "Quicksand",
                fontSize: "14px",
            },
        },
    };

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`orders/byWarehouse/${warehouseId}`);

            const mapOrdersInside = response.data.inside.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "Inside",
                };
            });
            const mapOrdersSended = response.data.sended.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "Sended",
                };
            });
            const allOrders = mapOrdersInside.concat(mapOrdersSended);

            console.log(mapOrdersInside);
            getWarehouseById();
            setOrders(allOrders);
            setTotalInsideOrder(mapOrdersInside.length);
            setTotalSendedOrder(mapOrdersSended.length);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const getWarehouseById = async () => {
        try {
            const response = await axiosInstance.get(`warehouse/${warehouseId}`);
            setProvince(response.data.warehouse.province);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">Orders in {province} </h1>
            <h1 className="font-bold font-quick pb-3 pt-3 text-left pl-7">
                Hàng trong kho: {totalInsideOrder}
            </h1>
            <h1 className="font-bold font-quick pb-3 pt-3 text-left pl-7">
                Hàng đã được gửi đi: {totalSendedOrder}
            </h1>
            <div className="w-[80%] mx-auto p-4 h-auto">
                <PieChart
                    series={[
                        totalInsideOrder,
                        totalSendedOrder,
                        totalInsideOrder + totalSendedOrder,
                    ]}
                />
            </div>
            <DataTable
                className="px-2"
                columns={columns}
                data={orders}
                selectableRows
                pagination
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
}
