import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import * as orderService from "../../apiService/orderService";
import * as statisticService from "../../apiService/statisticService";
import BarChart from "../../Components/BarChart";
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

export default function StatisticAll() {
    const [inputOrder, setInputOrder] = useState([]);
    const [successOrder, setSuccessOrder] = useState([]);
    const [status, setStatus] = useState("All");
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
            width: "15%",
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
            width: "20%",
        },
        {
            name: "Action",
            button: true,
            width: "20%",
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
            const orders = await orderService.getAllOrdersInCountry();

            const statistic = await statisticService.getStaticOrederInCountry();
            setInputOrder(statistic.order);
            setSuccessOrder(statistic.success);

            const mapOrders = orders.map((order) => {
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

    const filteredOrders = orders.filter((order) => {
        return status == "All" || order.status.toLowerCase() == status.toLowerCase();
    });

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 ">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center uppercase">
                All orders in country
            </h1>
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
                                className="w-96 mr-8 h-max"
                                color="orange"
                                shadow="true"
                                variant="gradient"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h4"
                                        color="blue-gray"
                                        className="mb-2 uppercase"
                                    >
                                        Total Success Orders
                                    </Typography>
                                    <Typography variant="h1" color="blue-gray" className="mb-2">
                                        {
                                            orders.filter((order) => {
                                                return order.status.toLowerCase() == "success";
                                            }).length
                                        }
                                    </Typography>
                                </CardBody>
                            </Card>
                            <Card
                                className="w-96 mr-8 h-max"
                                color="cyan"
                                shadow="true"
                                variant="gradient"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h4"
                                        color="blue-gray"
                                        className="mb-2 uppercase"
                                    >
                                        Total Delivering Order
                                    </Typography>
                                    <Typography variant="h1" color="blue-gray" className="mb-2">
                                        {orders.length -
                                            orders.filter((order) => {
                                                return order.status.toLowerCase() == "success";
                                            }).length}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
                            <div className="w-[10%] mx-2 pt-4">
                                <Select
                                    label="Choose Status"
                                    color="indigo"
                                    size="lg"
                                    onChange={(value) => setStatus(value)}
                                >
                                    <Option value="All">All</Option>
                                    <Option value="Success">Success</Option>
                                    <Option value="Delivering">Delivering</Option>
                                </Select>
                            </div>
                            <DataTable
                                className="px-4 py-4"
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
                        <div className="pb-4">
                            <BarChart data={inputOrder} state={"order"} />
                        </div>
                        <BarChart data={successOrder} state={"sucess"} />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
}
