import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import * as orderService from "../../apiService/orderService";
import * as warehouseService from "../../apiService/warehouseService";
import * as warehouseStaffService from "../../apiService/wareHouseStaffService";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, IconButton } from "@material-tailwind/react";

export default function StatisticWarehouse() {
    const [isFetch, setIsFetch] = useState(false);
    const params = useParams();
    const warehouseId = atob(params.id);
    const [province, setProvince] = useState();
    const [status, setStatus] = useState("All");

    const [comingOrder, setComingOrder] = useState([
        {
            id: "",
            sender: "",
            recipient: "",
            status: "",
            state: "",
        },
    ]);

    const [insideToWHOrder, setInsideToWHOrder] = useState([
        {
            id: "",
            sender: "",
            recipent: "",
            status: "",
            state: "",
        },
    ]);

    const [insideToOfficeOrder, setInsideToOfficeOrder] = useState([
        {
            id: "",
            sender: "",
            recipent: "",
            status: "",
            state: "",
        },
    ]);

    const [orders, setOrders] = useState([
        {
            id: "",
            sender: "",
            recipient: "",
            status: "",
        },
    ]);
    const columns = [
        {
            name: "OrderID",
            selector: (row) => row.id,
            sortable: true,
            width: "15%",
        },
        {
            name: "Sender",
            selector: (row) => row.sender,
            sortable: true,
        },
        {
            name: "Recipient",
            selector: (row) => row.recipient,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
        {
            name: "View",
            button: true,
            cell: (row) => (
                <div>
                    <IconButton
                        variant="text"
                        size="lg"
                        color="teal"
                        onClick={(e) => handleViewOrder(row.id)}
                    >
                        <i className="fa-solid fa-eye fa-xl"></i>
                    </IconButton>
                </div>
            ),
        },
        {
            name: "Send",
            button: true,
            width: "15%",
            cell: (row) => (
                <IconButton
                    variant="text"
                    size="lg"
                    color="green"
                    onClick={(e) => handleConfirmOrder(row.id, row.state)}
                >
                    <i className="fa-solid fa-circle-check fa-xl"></i>
                </IconButton>
            ),
        },
    ];

    const handleViewOrder = (orderId) => {
        const encodeId = btoa(orderId);
        window.open(`/bill/${encodeId}`);
    };

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
            const orders = await orderService.getOrdersByWarehouse(warehouseId);

            const comingOrder = await warehouseStaffService.getAllComingOrder(warehouseId);
            console.log(comingOrder);
            const mapComingOrder = comingOrder.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Incoming",
                    state: order.processTime.length,
                };
            });
            console.log(mapComingOrder);
            setComingOrder(mapComingOrder);

            const mapOrdersInsideToWarehouse = orders.inside
                .filter((order) => order.processTime.length == 3)
                .map((order) => ({
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Inside to Recipient Warehouse",
                    state: order.processTime.length,
                }));
            console.log(mapOrdersInsideToWarehouse);
            setInsideToWHOrder(mapOrdersInsideToWarehouse);

            const mapOrdersInsideToOffice = orders.inside
                .filter((order) => order.processTime.length == 5)
                .map((order) => ({
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Inside to Recipient Office",
                    state: order.processTime.length,
                }));
            setInsideToOfficeOrder(mapOrdersInsideToOffice);

            const mapOrdersInside = orders.inside.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Inside",
                };
            });

            const mapOrdersSendedToRecWH = orders.sendedToRecWH.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "SendedToRecWH",
                };
            });

            const mapOrdersSendedToRecPO = orders.sendedToRecPO.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "SendedToRecPO",
                };
            });

            const allOrders = mapOrdersInside
                .concat(mapOrdersSendedToRecWH)
                .concat(mapOrdersSendedToRecPO);

            const warehouse = await warehouseService.getWarehouseById(warehouseId);
            setProvince(warehouse.province);
            setOrders(allOrders);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const handleConfirmOrder = async (orderId, orderState) => {
        switch (orderState) {
            case 2:
                await warehouseStaffService.updateFirstOfficeToWarehouse(orderId);
                break;
            case 4:
                await warehouseStaffService.updateReceviedOrderFromFirstWarehouse(orderId);
                break;
            case 3:
                await warehouseStaffService.updateWarehouseToWarehouse(orderId);
                break;
            case 5:
                await warehouseStaffService.updateFinalWarehouseToOffice(orderId);
                break;
        }
        setIsFetch(!isFetch);
    };

    const filteredOrders = orders.filter((order) => {
        return status == "All" || order.status.toLowerCase() == status.toLowerCase();
    });

    useEffect(() => {
        fetchData();
    }, [isFetch]);

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 ">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center uppercase">
                All Orders in {province}
            </h1>
            <Tabs value="Coming">
                <TabsHeader>
                    <Tab key="Coming" value="Coming">
                        <i className="fa-solid fa-right-to-bracket h-full pr-2"></i>
                        Order Incoming
                    </Tab>
                    <Tab key="Office" value="Office">
                        <i className="fa-solid fa-chart-simple h-full pr-2"></i>
                        Order Inside to Office
                    </Tab>
                    <Tab key="Warehouse" value="Warehouse">
                        <i className="fa-solid fa-chart-simple h-full pr-2"></i>
                        Order Inside to Warehouse
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel key="Coming" value="Coming">
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <DataTable
                                className="p-4"
                                columns={columns}
                                data={comingOrder}
                                pagination
                                customStyles={customStyles}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </TabPanel>
                    <TabPanel key="Office" value="Office">
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <DataTable
                                className="p-4"
                                columns={columns}
                                data={insideToOfficeOrder}
                                pagination
                                customStyles={customStyles}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </TabPanel>
                    <TabPanel key="Warehouse" value="Warehouse">
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <DataTable
                                className="p-4"
                                columns={columns}
                                data={insideToWHOrder}
                                pagination
                                customStyles={customStyles}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
}
