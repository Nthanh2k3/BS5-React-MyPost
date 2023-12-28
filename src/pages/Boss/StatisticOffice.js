import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosInstance from "../../functions/axiosInstance";
import * as officeService from "../../apiService/officeService";
import * as orderService from "../../apiService/orderService";
import * as statisticService from "../../apiService/statisticService";

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
    IconButton,
} from "@material-tailwind/react";
import LineChart from "../../Components/LineChart";
export default function StatisticOffice() {
    const params = useParams();
    const postOfficeId = atob(params.id);
    const [status, setStatus] = useState("All");
    const [district, setDistrict] = useState();
    const [totalInsideOrder, setTotalInsideOrder] = useState("");
    const [totalSendToSenderWH, setTotalSendToSenderWH] = useState("");
    const [totalSendToShip, setTotalSendToShip] = useState("");
    const [totalShipSuccess, setTotalShipSuccess] = useState("");
    const [inputOrder, setInputOrder] = useState([]);
    const [successOrder, setSuccessOrder] = useState([]);

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
        {
            name: "Action",
            button: true,
            width: "15%",
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

    const handleViewOrder = (orderId) => {
        const encodeId = btoa(orderId);
        window.open(`/bill/${encodeId}`);
    };

    const fetchData = async () => {
        try {
            const statistic = await statisticService.getStaticOrderInOffice(postOfficeId);
            setInputOrder(statistic.order);
            setSuccessOrder(statistic.success);

            const orders = await orderService.getOrdersByOffice(postOfficeId);

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
            setTotalInsideOrder(mapOrdersInside.length);
            setTotalSendToSenderWH(mapOrdersSendtoSenderWH.length);
            setTotalSendToShip(mapOrdersSendToShip.length);
            setTotalShipSuccess(mapOrdersShipSuccess.length);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredOrders = orders.filter((order) => {
        return status == "All" || order.status.toLowerCase() == status.toLowerCase();
    });

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 ">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">Orders in {district} </h1>
            <Tabs value="Statistic">
                <TabsHeader>
                    <Tab key="Statistic" value="Statistic">
                        <i class="fa-solid fa-table h-full pr-2"></i>
                        Statistic
                    </Tab>
                    <Tab key="Chart" value="Chart">
                        <i className="fa-solid fa-chart-simple h-full pr-2"></i>
                        Chart
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel key="Statistic" value="Statistic">
                        <div className="flex flex-row mb-4">
                            <Card
                                className="w-70 mr-8 h-max"
                                color="orange"
                                shadow="true"
                                variant="gradient"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2 uppercase"
                                    >
                                        Total Inside Orders
                                    </Typography>
                                    <Typography variant="h2" color="blue-gray" className="mb-2">
                                        {totalInsideOrder}
                                    </Typography>
                                </CardBody>
                            </Card>
                            <Card
                                className="w-70 mr-8 h-max"
                                color="teal"
                                shadow="true"
                                variant="gradient"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2 uppercase"
                                    >
                                        Total Orders sended to Warehouse
                                    </Typography>
                                    <Typography variant="h2" color="blue-gray" className="mb-2">
                                        {totalSendToSenderWH}
                                    </Typography>
                                </CardBody>
                            </Card>
                            <Card
                                className="w-70 mr-8 h-max"
                                color="pink"
                                shadow="true"
                                variant="gradient"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2 uppercase"
                                    >
                                        Total Orders sended to ship
                                    </Typography>
                                    <Typography variant="h2" color="blue-gray" className="mb-2">
                                        {totalSendToShip}
                                    </Typography>
                                </CardBody>
                            </Card>
                            <Card
                                className="w-70 mr-8 h-max"
                                color="cyan"
                                shadow="true"
                                variant="gradient"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2 uppercase"
                                    >
                                        Total Orders shipped success
                                    </Typography>
                                    <Typography variant="h2" color="blue-gray" className="mb-2">
                                        {totalShipSuccess}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="mx-2 mb-2 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <div className="w-[10%] mx-2 pt-4">
                                <Select
                                    label="Choose Status"
                                    color="indigo"
                                    size="lg"
                                    onChange={(value) => setStatus(value)}
                                >
                                    <Option value="All">All</Option>
                                    <Option value="sendToSenderWH">Send To Sender WH</Option>
                                    <Option value="sendToShip">sendToShip</Option>
                                    <Option value="shipSuccess">Ship Success</Option>
                                </Select>
                            </div>
                            <DataTable
                                className="p-4"
                                columns={columns}
                                data={filteredOrders}
                                pagination
                                customStyles={customStyles}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </TabPanel>
                    <TabPanel key="Chart" value="Chart">
                        <LineChart
                            series={[
                                {
                                    name: "Imported Order",
                                    data: inputOrder,
                                },
                                {
                                    name: "Success Shipping Order",
                                    data: successOrder,
                                },
                            ]}
                        />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
}
