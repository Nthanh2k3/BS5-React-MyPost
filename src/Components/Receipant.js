import { Button, ButtonGroup, Card, Checkbox, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { CheckBox } from "@material-tailwind/react";
import QRCode from "qrcode-react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "react-router";
import * as orderService from "../apiService/orderServizce";
import { Container, Image } from "react-bootstrap";


function Receipant() {
    const pdfRef = useRef();
    const [fullURL, setFullURL] = React.useState("");
    const params = useParams();
    const orderId = atob(params.id);
    const [order, setOrder] = useState({});

    const downloadPDF = () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4',true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight()+50;
        const imgWidth = canvas.width;
        const imgHeight = canvas.height + 50;
        const ratio = Math.min(pdfWidth/imgWidth , pdfHeight/imgHeight);
        const imgX = 0
        const imgY = 0;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
        pdf.save('Receipt.pdf');
      });
    };

    useEffect(() => {
        // Get  full URL and update the state
        const currentURL = window.location.href;
        setFullURL(currentURL);
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await orderService.getOrderById(orderId);
        console.log(response);
        setOrder(response);
    };

    return (
        <>
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10" ref={pdfRef}>
                <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <h1
                            style={{
                                fontFamily: "Cookie, serif",
                                fontSize: 90,
                                textAlign: "center",
                            }}
                        >
                            MyPost
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <h2
                            className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                            style={{
                                fontFamily: "Cookie, serif",
                                fontSize: 70,
                                textAlign: "center",
                            }}
                        >
                            Receipt
                        </h2>
                    </div>
                    <div className="flex items-center">{fullURL && <QRCode value={fullURL} />}</div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    <div>
                        <div className="grid space-y-3">
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                    Sender details:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    <span className="block font-semibold">{order.senderName}</span>
                                    <address className="not-italic font-normal">
                                        Address: {order.senderAddress}
                                        <br />
                                        Phone Number: {order.senderPhone}
                                        <br />
                                        Office Code: {order.senderPostOfficeId}
                                        <br />
                                    </address>
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                    Receiver details:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    <span className="block font-semibold">
                                        {order.recipientName}
                                    </span>
                                    <address className="not-italic font-normal">
                                        Address: {order.recipientAddress}
                                        <br />
                                        Phone: {order.recipientPhone}
                                        <br />
                                        Office Code: {order.recipientPostOfficeId}
                                        <br />
                                    </address>
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] m;ax-w-[200px] text-gray-500">
                                    Special Service , Additional:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    <span className="block font-semibold">None</span>
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] m;ax-w-[200px] text-gray-500">
                                    Sender guide when cannot delivery the package:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    <span className="block font-semibold"></span>
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] m;ax-w-[200px] text-gray-500">
                                    Sender Commitment :
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    <span className="block font-semibold">
                                        <label htmlFor="checkbox1" className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="checkbox1"
                                                className="form-checkbox"
                                            />
                                            <span className="ml-2">
                                                I accept the terms and regulations of MyPost. I
                                                hereby affirm that the statements above are
                                                accurate, and I take responsibility for the
                                                information provided.
                                            </span>
                                        </label>
                                    </span>
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] m;ax-w-[200px] text-gray-500">
                                    Sender Signature:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    <span className="block font-semibold">//Signature//</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div className="grid space-y-3">
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                    Receipant ID
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    {orderId}
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                    Type of goods
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    {order.type}
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                    Date and Time:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    Sended At: {order.createdAt}
                                </dd>
                            </dl>
                            <dl className="grid sm:flex gap-x-3 text-sm">
                                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                    Billing method:
                                </dt>
                                <dd className="font-medium text-gray-800 dark:text-gray-200">
                                    //Billing Method Field//
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                    <div className="hidden sm:grid sm:grid-cols-5">
                        <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                            Item
                        </div>
                        <div className="text-start text-xs font-medium text-gray-500 uppercase">
                            Qty
                        </div>
                        <div className="text-start text-xs font-medium text-gray-500 uppercase">
                            Weight
                        </div>
                        <div className="text-end text-xs font-medium text-gray-500 uppercase">
                            Value
                        </div>
                    </div>
                    <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700" />
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div className="col-span-full sm:col-span-2">
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                Item
                            </h5>
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                Order {orderId}
                            </p>
                        </div>
                        <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                Qty
                            </h5>
                            <p className="text-gray-800 dark:text-gray-200">{order.quantity}</p>
                        </div>
                        <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                Weight
                            </h5>
                            <p className="text-gray-800 dark:text-gray-200">{order.kilogram} kg</p>
                        </div>
                        <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                Value
                            </h5>
                            <p className="sm:text-end text-gray-800 dark:text-gray-200">
                                {order.value}$
                            </p>
                        </div>
                    </div>
                    <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                </div>
                {/* End Table */}
                {/* Flex */}
                <div className="mt-8 flex sm:justify-end">
                    <div className="w-full max-w-2xl sm:text-end space-y-2">
                        {/* Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt className="col-span-3 text-gray-500">Service Charge:</dt>
                                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                    {order.serviceCharge} $
                                </dd>
                            </dl>
                            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt className="col-span-3 text-gray-500">Tax:</dt>
                                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                    {order.serviceCharge * 0.05} $
                                </dd>
                            </dl>
                            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt className="col-span-3 text-gray-500">Total</dt>
                                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                    {order.serviceCharge * 1.05} $
                                </dd>
                            </dl>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
            <Typography>
        Post Acceptance
        </Typography>
      </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <Button onClick={downloadPDF} className="w-max ">
                    Print Receipt
                </Button>
            </div>
        </>
    );
}

export default Receipant;
