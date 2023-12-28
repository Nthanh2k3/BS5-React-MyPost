import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../../functions/axiosInstance";
import MyDatePicker from "../../Components/MyDatePicker";
import * as officeService from "../../apiService/officeService";
import * as warehouseService from "../../apiService/warehouseService";
import * as userService from "../../apiService/userService";

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

export default function ListOfficeManager() {
    const [isFetch, setIsFetch] = useState(false);
    const [officeManager, setOfficeManager] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [provinces, setProvinces] = useState([
        {
            postOfficeID: "",
            district: "",
            belongToWarehouseID: "",
        },
    ]);

    useEffect(() => {
        // Gọi API và cập nhật state khi component được render
        fetchData();
    }, [isFetch]); // Mảng dependencies trống rỗng, chỉ gọi một lần sau khi component được render đầu tiên
    const fetchData = async () => {
        try {
            const officeManagers = await officeService.getAllOfficeManager();

            // Use Promise.all to wait for all async calls to getOfficeById
            const mapWarehouses = await Promise.all(
                officeManagers.map(async (officeManager) => {
                    const officeResponse = await officeService.getOfficeById(
                        officeManager.postOfficeID
                    );

                    return {
                        id: officeManager.userID,
                        name: officeManager.name,
                        email: officeManager.email,
                        district: officeResponse.district,
                        birthdate: officeManager.birthdate.substring(0, 10),
                    };
                })
            );
            const allOfficeWithoutManager = await officeService.getAllOfficeWithoutManager();
            const mapProvinces = allOfficeWithoutManager.map((office) => {
                return {
                    postOfficeID: office.postOfficeID,
                    district: office.district,
                    belongToWarehouseID: office.belongToWarehouseID,
                };
            });
            setProvinces(mapProvinces);
            setOfficeManager(mapWarehouses);
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    const handleButtonClick = async (e, id) => {
        e.preventDefault();
        await userService.deleteUserById(id);
        setIsFetch(!isFetch);
    };

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
            width: "10%",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Office",
            selector: (row) => row.district,
            sortable: true,
        },
        {
            name: "Birthdate",
            selector: (row) => row.birthdate,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
            width: "20%",
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

    const filteredOfficeManager = officeManager.filter(
        (officeManager) =>
            officeManager.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
            officeManager.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="tableContainer w-[90%] mx-auto mt-3 z-[1035] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
            <h1 className="font-bold font-quick pb-3 pt-3 text-center">List Office Manager</h1>
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
                data={filteredOfficeManager}
                selectableRows
                pagination
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
}

function DialogWithForm({ provinces }) {
    const [open, setOpen] = React.useState(false);
    const [managers, setManagers] = useState(["Nam", "Quang", "Thành"]);
    const [province, setProvince] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState(null);
    const handleOpen = () => setOpen((cur) => !cur);

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };
    const handleBirthdateChange = (date) => {
        setBirthdate(date);
    };

    const handleSubmit = () => {
        const payload = {
            username,
            password,
            name,
            email,
            birthdate: birthdate.toLocaleDateString("en-CA"), // Format to yyyy-mm-dd
            postOfficeID: province.postOfficeID,
            role: "officeManager",
        };

        // Perform any necessary actions with the payload (e.g., send it to the server)
        console.log("Submit payload:", payload);
        createNewOfficeManager(payload);
        handleOpen();
        // window.location.reload(true);
    };

    const createNewOfficeManager = async (payload) => {
        try {
            const response = await axiosInstance.request(`user/register`, {
                method: "post",
                data: payload,
            });
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="flex justify-end mb-2 ">
            <Button
                onClick={handleOpen}
                className="flex items-center gap-x-1 rounded-full w-auto mr-2"
            >
                <i className="fa-solid fa-user-plus"></i>
                Add
            </Button>

            <Dialog open={open} handler={handleOpen} size="lg" className="">
                <Card className="mx-auto w-full">
                    <CardBody className="flex flex-col gap-3 h-[38rem] overflow-y-auto">
                        <Typography variant="h4" color="blue-gray" className="font-bold uppercase">
                            Create Account for Office Manager
                        </Typography>
                        <hr className="bg-gray-200 border-b-4 w-full -mt-2" />

                        <Typography className="-mb-2" variant="h6">
                            Office
                        </Typography>
                        <Select
                            label="Select Office"
                            color="indigo"
                            size="lg"
                            onChange={(e) => setProvince(e)}
                        >
                            {provinces.map((province, index) => (
                                <Option key={index} value={province}>
                                    {province.district}
                                </Option>
                            ))}
                        </Select>

                        <Typography className="-mb-2" variant="h6">
                            Name
                        </Typography>
                        <Input
                            label="Enter Code"
                            size="lg"
                            color="indigo"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => handleInputChange(e, setName)}
                        />

                        <Typography className="-mb-2" variant="h6">
                            Username
                        </Typography>
                        <Input
                            label="Enter Code"
                            size="lg"
                            color="indigo"
                            value={username}
                            onChange={(e) => handleInputChange(e, setUsername)}
                        />

                        <Typography className="-mb-2" variant="h6">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={password}
                            onChange={(e) => handleInputChange(e, setPassword)}
                        />

                        <Typography className="-mb-2" variant="h6">
                            Email
                        </Typography>
                        <Input
                            label="Enter Code"
                            size="lg"
                            color="indigo"
                            placeholder="name@mail.com"
                            typeof="mail"
                            value={email}
                            onChange={(e) => handleInputChange(e, setEmail)}
                        />

                        <Typography variant="h6" className="-mb-2">
                            Date of Birth
                        </Typography>
                        <MyDatePicker onDateChange={handleBirthdateChange} />
                        {/* <Typography className="-mb-2" variant="h6">
                            Manager
                        </Typography>
                        <Select label="Select Manager" color="indigo" size="lg">
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