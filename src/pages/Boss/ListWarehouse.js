import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";
import axios from "axios";
import axiosInstance from "../../functions/axiosInstance";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Select,
    Option,
} from "@material-tailwind/react";

export default function ListWarehouse() {
    const [warehouses, setWarehoues] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Gọi API và cập nhật state khi component được render
        fetchData();
    }, [isFetch]); // Mảng dependencies trống rỗng, chỉ gọi một lần sau khi component được render đầu tiên

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`warehouse/all`);
            // Handle the response data

            const mapWarehouses = await Promise.all(
                response.data.warehouses.map(async (warehouse) => {
                    const warehouseResponse = await getWarehouseManagerByWarehouseId(
                        warehouse.warehouseID,
                        warehouse
                    );

                    return {
                        id: warehouse.warehouseID,
                        province: warehouse.province,
                        manager: warehouseResponse.data.warehouseManager.name,
                    };
                })
            );

            console.log(response.data);
            const mapProvinces = response.data.warehouses.map((warehouse) => {
                return warehouse.province;
            });

            setWarehoues(mapWarehouses);
            setProvinces(mapProvinces);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const getWarehouseManagerByWarehouseId = async (id, warehouse) => {
        try {
            const response = await axiosInstance.get(`warehouse/manager/${id}`);
            // Return the response for further processing
            console.log(response);
            return response;
        } catch (error) {
            // Handle errors

            if (
                error.response.data.message ==
                "Warehouse manager not found for the specified warehouse"
            ) {
                const response1 = {
                    data: {
                        warehouseManager: {
                            name: "None",
                        },
                    },
                };
                return response1;
            }
            console.error("Error fetching data:", error.response.data.message);
        }
    };

    const handleButtonClick = (e, id) => {
        e.preventDefault();
        deleteWarehouse(id);
    };

    const deleteWarehouse = async (id) => {
        try {
            const response = await axiosInstance.delete(`warehouse/${id}`);
            setIsFetch(!isFetch);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const handleRowClick = (id) => {
        console.log(id);
        navigate(`/boss/statistic/warehouse/${id}`);
    };

    const columns = [
        {
            name: "Warehouse Code",
            selector: (row) => row.id,
            sortable: true,
            width: "25%",
        },
        {
            name: "Warehouse",
            selector: (row) => row.province,
            sortable: true,
        },
        {
            name: "Manager",
            selector: (row) => row.manager,
            sortable: true,
        },
        {
            name: "Actions",
            button: true,
            width: "15%",
            cell: (row) => (
                <div className="flex flex-row">
                    <button
                        className="btn btn-outline btn-xs"
                        onClick={(e) => handleButtonClick(e, row.id)}
                    >
                        <i class="fa-solid fa-pen-to-square fa-beat"></i>
                    </button>
                    <button
                        className="btn btn-outline btn-xs ml-2"
                        onClick={(e) => handleButtonClick(e, row.id)}
                    >
                        <i class="fa-solid fa-trash fa-beat"></i>
                    </button>
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

    const filteredWarehouses = warehouses.filter((warehouse) =>
        warehouse.province.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">List Warehouse</h1>
            <div className="flex justify-between -mb-20">
                <div className="w-full md:w-72 ml-2 mb-5">
                    <Input
                        label="Search"
                        icon={<i className="fa-solid fa-magnifying-glass" />}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <DialogWithForm provinces={provinces} />

            <DataTable
                className="px-2"
                columns={columns}
                data={filteredWarehouses}
                selectableRows
                pagination
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
                onRowClicked={(row, e) => handleRowClick(row.id)}
            />
        </div>
    );
}

export function DialogWithForm({ provinces }) {
    const [open, setOpen] = React.useState(false);
    const [managers, setManagers] = useState(["Nam", "Quang", "Thành"]);
    const [province, setProvince] = useState("");
    const handleOpen = () => setOpen((cur) => !cur);

    const handleInputChange = (event) => {
        setProvince(event.target.value);
    };

    const handleSubmit = () => {
        handleOpen();
        createNewWarehouse();
        window.location.reload(true);
    };

    const createNewWarehouse = async () => {
        try {
            const response = await axiosInstance.request(`warehouse/new`, {
                method: "post",
                data: {
                    province: province,
                },
            });
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="flex justify-end mb-2">
            <Button
                onClick={handleOpen}
                className="flex items-center gap-x-1 rounded-full w-auto mr-2"
            >
                <i className="fa-solid fa-user-plus"></i>
                Add
            </Button>

            <Dialog open={open} handler={handleOpen} size="lg" className="">
                <Card className="mx-auto w-full">
                    <CardBody className="flex flex-col gap-3">
                        <Typography variant="h4" color="blue-gray" className="font-bold uppercase">
                            Create Warehouse
                        </Typography>
                        <hr className="bg-gray-200 border-b-4 w-full -mt-2" />

                        <Typography className="-mb-2" variant="h6">
                            Province
                        </Typography>
                        <Input
                            label="Enter Province"
                            size="lg"
                            color="indigo"
                            value={province}
                            onChange={handleInputChange}
                        />
                        <Typography className="-mb-2" variant="h6">
                            Warehouse Code
                        </Typography>
                        <Input label="Enter Code" size="lg" color="indigo" />
                        {/* <Typography className="-mb-2" variant="h6">
                            Manager
                        </Typography> */}
                        {/* <Select label="Select Manager" color="indigo" size="lg">
                            {managers.map((manager, index) => (
                                <Option key={index} value={manager}>
                                    {manager}
                                </Option>
                            ))}
                        </Select> */}
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-row gap-4">
                        <Button
                            variant="filled"
                            onClick={handleSubmit}
                            color="indigo"
                            className="rounded-full"
                        >
                            Create
                        </Button>
                        <Button
                            variant="filled"
                            onClick={handleOpen}
                            color="red"
                            className="rounded-full"
                        >
                            Cancle
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
}
