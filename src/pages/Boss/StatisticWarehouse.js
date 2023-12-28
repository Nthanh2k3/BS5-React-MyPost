import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosInstance from "../../functions/axiosInstance";
import PieChart from "../../Components/PieChart";
import * as orderService from "../../apiService/orderService";
import * as warehouseService from "../../apiService/warehouseService";
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

export default function StatisticWarehouse() {
    const params = useParams();
    const warehouseId = atob(params.id);
    const [province, setProvince] = useState();
    const [status, setStatus] = useState("All");
    const [totalInsideOrder, setTotalInsideOrder] = useState("");
    const [totalSendedToRecWH, setTotalSendedToRecWH] = useState("");
    const [totalSendedToRecPO, setTotalSendedToRecPO] = useState("");

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
            const orders = await orderService.getOrdersByWarehouse(warehouseId);

            const mapOrdersInside = orders.inside.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "Inside",
                };
            });

            const mapOrdersSendedToRecWH = orders.sendedToRecWH.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "SendedToRecWH",
                };
            });

            const mapOrdersSendedToRecPO = orders.sendedToRecPO.map((order) => {
                return {
                    id: order.orderID,
                    sender: order.senderName,
                    recipent: order.recipientName,
                    status: "SendedToRecPO",
                };
            });

            const allOrders = mapOrdersInside
                .concat(mapOrdersSendedToRecWH)
                .concat(mapOrdersSendedToRecPO);

            const warehouse = await warehouseService.getWarehouseById(warehouseId);
            setProvince(warehouse.province);
            setOrders(allOrders);
            setTotalInsideOrder(mapOrdersInside.length);
            setTotalSendedToRecPO(mapOrdersSendedToRecPO.length);
            setTotalSendedToRecWH(mapOrdersSendedToRecWH.length);
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
                All Orders in {province}
            </h1>
            {/* <h1 className="font-bold font-quick pb-3 pt-3 text-left pl-7">
                Hàng trong kho: {totalInsideOrder}
            </h1> */}

            {/* <div className="w-[80%] mx-auto p-4 h-auto">
                <PieChart
                    series={[
                        totalInsideOrder,
                        totalSendedOrder,
                        totalInsideOrder + totalSendedOrder,
                    ]}
                />
            </div> */}
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
                                        {totalSendedToRecWH}
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
                                        Total Orders sended to Office
                                    </Typography>
                                    <Typography variant="h2" color="blue-gray" className="mb-2">
                                        {totalSendedToRecPO}
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
                                    <Option value="Inside">Inside</Option>
                                    <Option value="SendedToRecWH">Sended to Warehouse</Option>
                                    <Option value="SendedToRecPO">Sended to Office</Option>
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
                    <TabPanel key="Chart" value="Chart"></TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
}
