import React, { useEffect, useState } from "react";
import * as warehouseService from "../../apiService/warehouseService";
import * as officeStaffService from "../../apiService/officeStaffService";
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
export default function CreateNewOrder() {
    const [senderName, setSenderName] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [senderAddress, setSenderAddress] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [recipientPhone, setRecipientPhone] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");
    const [weight, setWeight] = useState("");
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("");
    const [serviceCharge, setServiceCharge] = useState("");
    const [value, setValue] = useState("");
    const [warehouseList, setWarehouseList] = useState([]);
    const [officeList, setOfficeList] = useState([]);
    const [recipientofficeList, setRecipientOfficeList] = useState([]);
    const [office, setOffice] = useState({});
    const [recipientoffice, setRecipientOffice] = useState({});
    const [deliveryEmployeeId, setDeliveryEmployeeId] = useState("");

    const payload = {
        senderName,
        senderPhone,
        recipientName,
        recipientPhone,
        senderPostOfficeId: String(office.postOfficeID),
        recipientPostOfficeId: String(recipientoffice.postOfficeID),
        deliveryEmployeeId: String(deliveryEmployeeId),
        senderAddress,
        recipientAddress,
        kilogram: Number.parseInt(weight),
        type,
        value: Number.parseInt(value),
        serviceCharge: Number.parseInt(serviceCharge),
        quantity: Number.parseInt(quantity),
    };

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const handleSubmit = async () => {
        console.log(payload);
        await officeStaffService.createNewOrder(payload);
    };

    const handleReset = () => {
        setSenderName("");
        setSenderPhone("");
        setSenderAddress("");
        setRecipientName("");
        setRecipientPhone("");
        setRecipientAddress("");
        setWeight("");
        setQuantity("");
        setValue("");
        setServiceCharge("");
        setType("");
    };

    const handleSelectWarehouse = async (e) => {
        const offices = await warehouseService.getAllOfficeInWarehouse(e.warehouseID);
        setOfficeList(offices);
    };

    const handleSelectRecipientWarehouse = async (e) => {
        const offices = await warehouseService.getAllOfficeInWarehouse(e.warehouseID);
        setRecipientOfficeList(offices);
    };

    const fetchData = async () => {
        const warehouses = await warehouseService.getAllWarehouse();
        const currentUser = await userService.getRole();
        console.log(currentUser.user.userID);
        setDeliveryEmployeeId(currentUser.user.userID);
        setWarehouseList(warehouses);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Card className="mx-auto w-[90%] my-4 overflow-y-auto">
            <CardBody className="flex flex-col gap-3 h-max ">
                <Typography variant="h4" color="blue-gray" className="font-bold uppercase">
                    Create New Order
                </Typography>
                <hr className="bg-gray-200 border-b-4 w-full -mt-2" />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Typography className="mb-2" variant="h6">
                            Sender Name
                        </Typography>
                        <Input
                            placeholder="Enter Sender Name"
                            size="lg"
                            color="indigo"
                            value={senderName}
                            onChange={(e) => handleInputChange(e, setSenderName)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Sender Phone
                        </Typography>
                        <Input
                            placeholder="Enter Sender Phone"
                            size="lg"
                            color="indigo"
                            value={senderPhone}
                            onChange={(e) => handleInputChange(e, setSenderPhone)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Sender Address
                        </Typography>
                        <Input
                            placeholder="Enter Sender Address"
                            size="lg"
                            color="indigo"
                            value={senderAddress}
                            onChange={(e) => handleInputChange(e, setSenderAddress)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Choose Sender Office
                        </Typography>
                        <div className="grid grid-cols-2 gap-4">
                            <Select
                                label="Select Warehouse"
                                color="indigo"
                                size="lg"
                                onChange={(e) => handleSelectWarehouse(e)}
                            >
                                {warehouseList.map((warehouse, index) => (
                                    <Option key={index} value={warehouse}>
                                        {warehouse.province}
                                    </Option>
                                ))}
                            </Select>
                            <Select
                                label="Select Office"
                                color="indigo"
                                size="lg"
                                onChange={(e) => {
                                    setOffice(e);
                                }}
                            >
                                {officeList.map((office, index) => (
                                    <Option key={index} value={office}>
                                        {office.district}
                                    </Option>
                                ))}
                            </Select>
                        </div>

                        <Typography className="mb-2" variant="h6">
                            Weight
                        </Typography>
                        <Input
                            placeholder="Enter Weight of Order (Kg)"
                            size="lg"
                            color="indigo"
                            value={weight}
                            onChange={(e) => handleInputChange(e, setWeight)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Type
                        </Typography>
                        <Input
                            placeholder="Enter Type of Order"
                            size="lg"
                            color="indigo"
                            value={type}
                            onChange={(e) => handleInputChange(e, setType)}
                        />
                    </div>
                    <div>
                        <Typography className="mb-2" variant="h6">
                            Recipient Name
                        </Typography>
                        <Input
                            placeholder="Enter Recipient Name"
                            size="lg"
                            color="indigo"
                            value={recipientName}
                            onChange={(e) => handleInputChange(e, setRecipientName)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Recipient Phone
                        </Typography>
                        <Input
                            placeholder="Enter Recipient Name"
                            size="lg"
                            color="indigo"
                            value={recipientPhone}
                            onChange={(e) => handleInputChange(e, setRecipientPhone)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Recipient Address
                        </Typography>
                        <Input
                            placeholder="Enter Recipient Name"
                            size="lg"
                            color="indigo"
                            value={recipientAddress}
                            onChange={(e) => handleInputChange(e, setRecipientAddress)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Choose Recipient Office
                        </Typography>
                        <div className="grid grid-cols-2 gap-4">
                            <Select
                                label="Select Warehouse"
                                color="indigo"
                                size="lg"
                                onChange={(e) => handleSelectRecipientWarehouse(e)}
                            >
                                {warehouseList.map((warehouse, index) => (
                                    <Option key={index} value={warehouse}>
                                        {warehouse.province}
                                    </Option>
                                ))}
                            </Select>
                            <Select
                                label="Select Office"
                                color="indigo"
                                size="lg"
                                onChange={(e) => {
                                    console.log(e);
                                    setRecipientOffice(e);
                                }}
                            >
                                {recipientofficeList.map((office, index) => (
                                    <Option key={index} value={office}>
                                        {office.district}
                                    </Option>
                                ))}
                            </Select>
                        </div>

                        <Typography className="mb-2" variant="h6">
                            Quantity
                        </Typography>
                        <Input
                            placeholder="Enter Quantity"
                            size="lg"
                            color="indigo"
                            value={quantity}
                            onChange={(e) => handleInputChange(e, setQuantity)}
                        />

                        <Typography className="mb-2" variant="h6">
                            Service Charge
                        </Typography>
                        <Input
                            placeholder="Enter Service Charge"
                            size="lg"
                            color="indigo"
                            value={serviceCharge}
                            onChange={(e) => handleInputChange(e, setServiceCharge)}
                        />
                    </div>
                </div>
                <Typography className="mb-2" variant="h6">
                    Value
                </Typography>
                <Input
                    placeholder="Enter Value of Order"
                    size="lg"
                    color="indigo"
                    value={value}
                    onChange={(e) => handleInputChange(e, setValue)}
                />
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
                <Button variant="filled" color="red" className="rounded-full" onClick={handleReset}>
                    Reset
                </Button>
            </CardFooter>
        </Card>
    );
}
