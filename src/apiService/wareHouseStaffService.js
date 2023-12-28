import axiosInstance from "../functions/axiosInstance";

export const updateFirstOfficeToWarehouse = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/${orderID}/newNumState=2`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateWarehouseToWarehouse = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/${orderID}/newNumState=3`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateReceviedOrderFromFirstWarehouse = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/${orderID}/newNumState=4`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateFinalWarehouseToOffice = async (orderID) => {
    try {
        const response = await axiosInstance.request(`updatestate/${orderID}/newNumState=5`, {
            method: "put",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};
