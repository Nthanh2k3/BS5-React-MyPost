import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../../functions/axiosInstance";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";

export default function ListOffice() {
    const [offices, setOffices] = useState([]);
    const [provinces, setProvinces] = useState([
        {
            province: "",
            warehouseId: "",
        },
    ]);
    const [isFetch, setIsFetch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const navigate = useNavigate();

    useEffect(() => {
        // Gọi API và cập nhật state khi component được render
        fetchData();
    }, [isFetch]); // Mảng dependencies trống rỗng, chỉ gọi một lần sau khi component được render đầu tiên

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`postoffice/all`);
            // Handle the response data

            const mapOffices = await Promise.all(
                response.data.postOffices.map(async (office) => {
                    const officeResponse = await getOfficeManagerByOfficeId(office.postOfficeID);
                    const warehouseResponse = await getWarehouseById(office.belongToWarehouseID);

                    return {
                        id: office.postOfficeID,
                        district: office.district,
                        province: warehouseResponse.data.warehouse.province,
                        manager: officeResponse.data.postOfficeManager.name,
                    };
                })
            );

            console.log(response.data);

            getAllWarehouse();
            setOffices(mapOffices);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const getOfficeManagerByOfficeId = async (id) => {
        try {
            const response = await axiosInstance.get(`postoffice/manager/${id}`);
            // Return the response for further processing
            console.log(response);
            return response;
        } catch (error) {
            // Handle errors

            if (
                error.response.data.message ==
                "postOfficeManager not found for the specified postOffice"
            ) {
                const response1 = {
                    data: {
                        postOfficeManager: {
                            name: "None",
                        },
                    },
                };
                return response1;
            }
            console.error("Error fetching data:", error.response.data.message);
        }
    };

    const getWarehouseById = async (id) => {
        try {
            const response = await axiosInstance.get(`warehouse/${id}`);
            // Return the response for further processing
            console.log(response);
            return response;
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const getAllWarehouse = async () => {
        const response = await axiosInstance.get(`warehouse/all`);
        const mapProvinces = response.data.warehouses.map((warehouse) => {
            return {
                province: warehouse.province,
                warehouseId: warehouse.warehouseID,
            };
        });
        console.log(mapProvinces);
        setProvinces(mapProvinces);
    };

    const handleButtonClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        // deleteWarehouse(id);
    };

    const handleRowClick = (id) => {
        console.log(id);
        navigate(`/boss/statistic/office/${id}`);
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

    const columns = [
        {
            name: "Office Code",
            selector: (row) => row.id,
            sortable: true,
            width: "20%",
        },
        {
            name: "Office",
            selector: (row) => row.district,
            sortable: true,
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

    const filteredWarehouses = offices.filter(
        (office) =>
            office.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
            office.province.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">List Office</h1>
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

            <Outlet />
        </div>
    );
}

function DialogWithForm({ provinces }) {
    const [open, setOpen] = React.useState(false);
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const handleOpen = () => setOpen((cur) => !cur);

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const handleSubmit = () => {
        handleOpen();
        createNewWarehouse();
        // window.location.reload(true);
    };

    const createNewWarehouse = async () => {
        try {
            const response = await axiosInstance.request(
                `postoffice/new/warehouseID=${province.warehouseId}`,
                {
                    method: "post",
                    data: {
                        district: district,
                    },
                }
            );
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
                            Create Office
                        </Typography>
                        <hr className="bg-gray-200 border-b-4 w-full -mt-2" />

                        <Typography className="-mb-2" variant="h6">
                            Office
                        </Typography>
                        <Input
                            label="Enter Office"
                            size="lg"
                            color="indigo"
                            value={district}
                            onChange={(e) => handleInputChange(e, setDistrict)}
                        />

                        <Typography className="-mb-2" variant="h6">
                            Belong to Warehouse
                        </Typography>
                        <Select
                            label="Select Warehouse"
                            color="indigo"
                            size="lg"
                            onChange={(e) => setProvince(e)}
                        >
                            {provinces.map((province, index) => (
                                <Option key={index} value={province}>
                                    {province.province}
                                </Option>
                            ))}
                        </Select>
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
