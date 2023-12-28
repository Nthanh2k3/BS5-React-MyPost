import axiosInstance from "../functions/axiosInstance";

export const getAllWarehouse = async () => {
    const response = await axiosInstance.get(`warehouse/all`);
    return response.data.warehouses;
};

export const getWarehouseById = async (id) => {
    try {
        const response = await axiosInstance.get(`warehouse/${id}`);
        console.log(response.data.warehouse);
        return response.data.warehouse;
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};
export const getAllWarehouseWithoutManager = async () => {
    const response = await axiosInstance.get(`warehouse/all/notHaveWarehouseManagers`);
    return response.data.warehousesWithoutManager;
};

export const createNewWarehouse = async (province) => {
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

export const deleteWarehouseById = async (id) => {
    try {
        const response = await axiosInstance.delete(`warehouse/${id}`);
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getAllWarehouseManager = async () => {
    const response = await axiosInstance.get(`warehouse/all/warehouseManagers/`);
    return response.data.warehouseManagers;
};

export const getWarehouseManagerByWarehouseId = async (id) => {
    try {
        const response = await axiosInstance.get(`warehouse/manager/${id}`);
        return response;
    } catch (error) {
        if (
            error.response.data.message == "Warehouse manager not found for the specified warehouse"
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

export const getAllOfficeInWarehouse = async (warehouseId) => {
    const response = await axiosInstance.get(`postoffice/byWarehouse/warehouseID=${warehouseId}`);
    return response.data.postOffices;
};
