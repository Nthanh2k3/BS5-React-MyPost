import axiosInstance from "../functions/axiosInstance";

export const createNewOrder = async (data) => {
    try {
        const response = await axiosInstance.request(`orders/new`, {
            method: "post",
            data: data,
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateFirstOfficeToWarehouse = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/${orderID}/newNumState=1`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateFinalWarehouseToOffice = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/${orderID}/newNumState=6`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateSendToShip = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/sendToShip/${orderID}`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateShipFailled = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updateState/shipFailed/${orderID}`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateTimeSuccess = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updateState/successfully/${orderID}`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getSuccessfullOrder = async (postOfficeId) => {
    try {
        const response = await axiosInstance.request(
            `orders/succesfullyByPostOffice/${postOfficeId}`,
            {
                method: "get",
            }
        );
        return response.data.successfulOrders;
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getNotSuccessfullOrder = async (postOfficeId) => {
    try {
        const response = await axiosInstance.request(
            `orders/notSuccesfullyByPostOffice/${postOfficeId}`,
            {
                method: "get",
            }
        );
        return response.data.notSuccessfulOrders;
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getAllComingOrder = async (postOfficeId) => {
    try {
        const response = await axiosInstance.request(
            `/postoffice/allOrdersComing/${postOfficeId}`,
            {
                method: "get",
            }
        );
        return response.data.orders;
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};
