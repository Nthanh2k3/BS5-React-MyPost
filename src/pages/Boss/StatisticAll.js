import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../../functions/axiosInstance";
export default function StatisticAll() {
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
            const response = await axiosInstance.get(`orders/all`);

            const mapOrders = response.data.orders.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: order.timeSuccess !== null ? "Success" : "Delivering",
                };
            });
            console.log(mapOrders);
            setOrders(mapOrders);
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
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">All orders in country</h1>

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
