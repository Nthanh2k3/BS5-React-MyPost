import { Checkbox } from "@material-tailwind/react";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { CheckBox } from "@material-tailwind/react";
import QRCode from "qrcode-react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Receipant() {
    const [fullURL, setFullURL] = React.useState("");
    useEffect(() => {
        // Get  full URL and update the state
        const currentURL = window.location.href;
        setFullURL(currentURL);
    }, []);

    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
            <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                    <h1 style={{ fontFamily: "Cookie, serif", fontSize: 90, textAlign: "center" }}>
                        MyPost
                    </h1>
                </div>
                <div className="flex items-center">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
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
                                <span className="block font-semibold">//Name Field//</span>
                                <address className="not-italic font-normal">
                                    //Address Field//,
                                    <br />
                                    //Phone Number Field//,
                                    <br />
                                    //Post ID//
                                    <br />
                                </address>
                            </dd>
                        </dl>
                        <dl className="grid sm:flex gap-x-3 text-sm">
                            <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                Receiver details:
                            </dt>
                            <dd className="font-medium text-gray-800 dark:text-gray-200">
                                <span className="block font-semibold">//Name Field//</span>
                                <address className="not-italic font-normal">
                                    //Address Field//,
                                    <br />
                                    //Phone Number Field//,
                                    <br />
                                    //Post ID//
                                    <br />
                                </address>
                            </dd>
                        </dl>
                        <dl className="grid sm:flex gap-x-3 text-sm">
                            <dt className="min-w-[150px] m;ax-w-[200px] text-gray-500">
                                Special Service , Additional:
                            </dt>
                            <dd className="font-medium text-gray-800 dark:text-gray-200">
                                <span className="block font-semibold">//Note//</span>
                            </dd>
                        </dl>
                        <dl className="grid sm:flex gap-x-3 text-sm">
                            <dt className="min-w-[150px] m;ax-w-[200px] text-gray-500">
                                Sender guide when cannot delivery the package:
                            </dt>
                            <dd className="font-medium text-gray-800 dark:text-gray-200">
                                <span className="block font-semibold">//Note//</span>
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
                                            I accept the terms and regulations of MyPost. I hereby
                                            affirm that the statements above are accurate, and I
                                            take responsibility for the information provided.
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
                                //ID Field//
                            </dd>
                        </dl>
                        <dl className="grid sm:flex gap-x-3 text-sm">
                            <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                Type of goods
                            </dt>
                            <dd className="font-medium text-gray-800 dark:text-gray-200">
                                //Goods Type Field//
                            </dd>
                        </dl>
                        <dl className="grid sm:flex gap-x-3 text-sm">
                            <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                                Date and Time:
                            </dt>
                            <dd className="font-medium text-gray-800 dark:text-gray-200">
                                //Date Field//
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
                        Amount
                    </div>
                </div>
                <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Item
                        </h5>
                        <p className="font-medium text-gray-800 dark:text-gray-200">Item</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Qty
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">1</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Weight
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">5</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Amount
                        </h5>
                        <p className="sm:text-end text-gray-800 dark:text-gray-200">$500</p>
                    </div>
                </div>
                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Item
                        </h5>
                        <p className="font-medium text-gray-800 dark:text-gray-200">Item</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Qty
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">1</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Weight
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">24</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Amount
                        </h5>
                        <p className="sm:text-end text-gray-800 dark:text-gray-200">$1250</p>
                    </div>
                </div>
                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Item
                        </h5>
                        <p className="font-medium text-gray-800 dark:text-gray-200">Item</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Qty
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">1</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Weight
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">6</p>
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                            Amount
                        </h5>
                        <p className="sm:text-end text-gray-800 dark:text-gray-200">$2000</p>
                    </div>
                </div>
            </div>
            {/* End Table */}
            {/* Flex */}
            <div className="mt-8 flex sm:justify-end">
                <div className="w-full max-w-2xl sm:text-end space-y-2">
                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                            <dt className="col-span-3 text-gray-500">Total Weight:</dt>
                            <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                35kg
                            </dd>
                        </dl>
                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                            <dt className="col-span-3 text-gray-500">Total:</dt>
                            <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                $2750.00
                            </dd>
                        </dl>
                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                            <dt className="col-span-3 text-gray-500">Tax:</dt>
                            <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                $39.00
                            </dd>
                        </dl>
                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                            <dt className="col-span-3 text-gray-500">Amount paid:</dt>
                            <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                $2789.00
                            </dd>
                        </dl>
                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                            <dt className="col-span-3 text-gray-500">Due balance:</dt>
                            <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                                $0.00
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <label style={{ textAlign: "right", fontSize: 20 }}>Post Acceptance</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Receipant;
