import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import * as officeService from "../../apiService/officeService";
import * as orderService from "../../apiService/orderService";
import * as officeStaffService from "../../apiService/officeStaffService";
import { IconButton } from "@material-tailwind/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    Card,
    CardBody,
    Select,
    Option,
} from "@material-tailwind/react";
export default function OrderStatus() {
    const [isFetch, setIsFetch] = useState(false);
    const params = useParams();
    const postOfficeId = atob(params.id);
    const [status, setStatus] = useState("All");
    const [district, setDistrict] = useState();
    const [comingOrder, setComingOrder] = useState([
        {
            id: "",
            sender: "",
            recipient: "",
            status: "",
        },
    ]);

    const [insideToWHOrder, setInsideToWHOrder] = useState([
        {
            id: "",
            sender: "",
            recipent: "",
            status: "",
        },
    ]);

    const [insideToCusOrder, setInsideToCusOrder] = useState([
        {
            id: "",
            sender: "",
            recipent: "",
            status: "",
        },
    ]);
    const [shippingOrder, setShippingOrder] = useState([
        {
            id: "",
            sender: "",
            recipent: "",
            status: "",
        },
    ]);

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
            name: "Confirm",
            button: true,
            width: "15%",
            cell: (row) => (
                <IconButton
                    variant="text"
                    size="lg"
                    color="green"
                    onClick={(e) => handleConfirmComingOrder(row.id, row.status)}
                >
                    <i className="fa-solid fa-circle-check fa-xl"></i>
                </IconButton>
            ),
        },
    ];

    const columnsShipping = [
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
            name: "Confirm",
            button: true,
            width: "15%",
            cell: (row) => (
                <div>
                    <IconButton
                        variant="text"
                        size="lg"
                        color="green"
                        onClick={(e) => handleConfirmShippingOrder(row.id, "Success")}
                    >
                        <i className="fa-solid fa-circle-check fa-xl"></i>
                    </IconButton>
                    <IconButton
                        variant="text"
                        size="lg"
                        color="red"
                        onClick={(e) => handleConfirmShippingOrder(row.id, "Failed")}
                    >
                        <i className="fa-solid fa-circle-xmark fa-xl"></i>
                    </IconButton>
                </div>
            ),
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

    const handleConfirmComingOrder = async (orderId, orderStatus) => {
        switch (orderStatus) {
            case "Inside To Warehouse":
                await officeStaffService.updateFirstOfficeToWarehouse(orderId);
                break;
            case "Incoming":
                await officeStaffService.updateFinalWarehouseToOffice(orderId);
                break;
            case "Inside To Customer":
                await officeStaffService.updateSendToShip(orderId);
                break;
        }
        setIsFetch(!isFetch);
    };

    const handleConfirmShippingOrder = async (orderId, orderStatus) => {
        switch (orderStatus) {
            case "Success":
                await officeStaffService.updateTimeSuccess(orderId);
                break;
            case "Failed":
                await officeStaffService.updateShipFailled(orderId);
                break;
        }
        setIsFetch(!isFetch);
    };

    const fetchData = async () => {
        try {
            const orders = await orderService.getOrdersByOffice(postOfficeId);

            const comingOrder = await officeStaffService.getAllComingOrder(postOfficeId);
            console.log(comingOrder);
            const mapComingOrder = comingOrder.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Incoming",
                };
            });
            setComingOrder(mapComingOrder);

            const mapOrdersInsideToWarehouse = orders.inside
                .filter((order) => order.processTime.length == 1)
                .map((order) => ({
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Inside To Warehouse",
                }));
            console.log(mapOrdersInsideToWarehouse);
            setInsideToWHOrder(mapOrdersInsideToWarehouse);

            const mapOrdersInsideToCustomer = orders.inside
                .filter((order) => order.processTime.length == 7)
                .map((order) => ({
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Inside To Customer",
                }));
            const mapOrderShipFailed = orders.isShipFailed.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Inside To Customer",
                };
            });
            setInsideToCusOrder(mapOrdersInsideToCustomer.concat(mapOrderShipFailed));

            const mapOrderSendToShip = orders.sendToShip.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipient: order.recipientName,
                    status: "Shipping",
                };
            });
            setShippingOrder(mapOrderSendToShip);

            const mapOrdersInside = orders.inside.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "Inside",
                };
            });
            const mapOrdersSendtoSenderWH = orders.sendToSenderWH.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "sendToSenderWH",
                };
            });
            const mapOrdersSendToShip = orders.sendToShip.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "sendToShip",
                };
            });
            const mapOrdersShipSuccess = orders.shipSuccess.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "shipSuccess",
                };
            });
            const allOrders = mapOrdersInside
                .concat(mapOrdersSendtoSenderWH)
                .concat(mapOrdersSendToShip)
                .concat(mapOrdersShipSuccess);

            const postOffice = await officeService.getOfficeById(postOfficeId);
            setDistrict(postOffice.district);

            setOrders(allOrders);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [isFetch]);

    // const filteredOrders = orders.filter((order) => {
    //     return status == "All" || order.status.toLowerCase() == status.toLowerCase();
    // });

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 ">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">Orders in {district} </h1>
            <Tabs value="Coming">
                <TabsHeader>
                    <Tab key="Coming" value="Coming">
                        <i className="fa-solid fa-right-to-bracket h-full pr-2"></i>
                        Order Incoming
                    </Tab>
                    <Tab key="Customer" value="Customer">
                        <i className="fa-solid fa-chart-simple h-full pr-2"></i>
                        Order Inside to Customer
                    </Tab>
                    <Tab key="Warehouse" value="Warehouse">
                        <i className="fa-solid fa-chart-simple h-full pr-2"></i>
                        Order Inside to Warehouse
                    </Tab>
                    <Tab key="Shipping" value="Shipping">
                        <i className="fa-solid fa-arrow-right-from-bracket h-full pr-2"></i>
                        Order Shipping
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel key="Coming" value="Coming">
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <DataTable
                                className="p-4"
                                columns={columns}
                                data={comingOrder}
                                selectableRows
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
                                selectableRows
                                pagination
                                customStyles={customStyles}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </TabPanel>
                    <TabPanel key="Cusotmer" value="Customer">
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <DataTable
                                className="p-4"
                                columns={columns}
                                data={insideToCusOrder}
                                selectableRows
                                pagination
                                customStyles={customStyles}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </TabPanel>
                    <TabPanel key="Shipping" value="Shipping">
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <DataTable
                                className="p-4"
                                columns={columnsShipping}
                                data={shippingOrder}
                                selectableRows
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
