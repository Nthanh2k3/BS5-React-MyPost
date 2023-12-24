import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

const handleButtonClick = (e, id) => {
    e.preventDefault();
    console.log("Row Id", id);
};

const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
        sortable: true,
        width: "10%",
    },
    {
        name: "Fullname",
        selector: (row) => row.fullname,
        sortable: true,
    },
    {
        name: "Username",
        selector: (row) => row.username,
        sortable: true,
    },
    {
        name: "Password",
        selector: (row) => row.password,
        sortable: true,
    },
    {
        name: "Role",
        selector: (row) => row.role,
        sortable: true,
    },
    {
        name: "Transfer",
        selector: (row) => row.transfer,
        sortable: true,
    },
    {
        name: "Actions",
        button: true,
        width: "10%",
        cell: (row) => (
            <div>
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

const data = [
    {
        id: 1,
        fullname: "Pham Minh Quang",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        transfer: "Hà Nội",
        role: "Transfer Leader",
    },
    {
        id: 2,
        fullname: "Pham Minh Quang",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        role: "Transfer Leader",
    },
    {
        id: 3,
        fullname: "Pham Minh Quang",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        role: "Transfer Leader",
    },
    {
        id: 4,
        fullname: "Pham Minh Quang",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        role: "Transfer Leader",
    },
    {
        id: 5,
        fullname: "Nguyen Viet Thanh",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        role: "Transfer Leader",
    },
    {
        id: 6,
        fullname: "Nguyen Viet Thanh",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        transfer: "Hồ Chí Minh",
        role: "Transfer Leader",
    },
    {
        id: 7,
        fullname: "Nguyen Viet Thanh",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        role: "Transfer Leader",
    },
    {
        id: 8,
        fullname: "Nguyen Viet Thanh",
        username: "minhwang@gmail.com",
        password: "pmg21021532",
        role: "Transfer Leader",
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
            // borderTopStyle: 'solid',
            // borderTopWidth: '1px',
            // borderTopColor: '#000000',
            backgroundColor: "#99ccff",
        },
    },
    headCells: {
        style: {
            // '&:not(:last-of-type)': {
            // 	borderRightStyle: 'solid',
            // 	borderRightWidth: '1px',
            // 	borderRightColor: '#000000',
            // },
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Quicksand",
        },
    },
    cells: {
        style: {
            // '&:not(:last-of-type)': {
            // 	borderRightStyle: 'solid',
            // 	borderRightWidth: '1px',
            // 	borderRightColor: '#000000',
            // },
            fontFamily: "Quicksand",
            fontSize: "14px",
        },
    },
};

export default function ListTransferManager() {
    return (
        <div className="tableContainer">
            <h1 className="font-bold">List Transfer Manager</h1>
            <DialogWithForm />
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
}

export function DialogWithForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <div className="flex justify-between mb-2">
            <div className="w-full md:w-72">
                <Input label="Search" icon={<i className="fa-solid fa-magnifying-glass" />} />
            </div>
            <Button onClick={handleOpen} className="flex items-center gap-x-1 rounded-full">
                <i className="fa-solid fa-user-plus"></i>
                Add
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Creat Account
                        </Typography>
                        <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
                            Fill Information to Create Account.
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Fullname
                        </Typography>
                        <Input label="Enter Fullname" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Username
                        </Typography>
                        <Input label="Enter Username" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Password
                        </Typography>
                        <Input label="Enter Password" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Role
                        </Typography>
                        <Input label="Set Role" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Create
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
}
