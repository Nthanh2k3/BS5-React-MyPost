import axiosInstance from "../functions/axiosInstance";

export const getAllOrdersInCountry = async () => {
    const response = await axiosInstance.get(`orders/all`);
    return response.data.orders;
};

export const getOrdersByOffice = async (postOfficeId) => {
    const response = await axiosInstance.get(`orders/byPostOffice/${postOfficeId}`);
    return response.data;
};

export const getOrdersByWarehouse = async (warehouseId) => {
    const response = await axiosInstance.get(`orders/byWarehouse/${warehouseId}`);
    return response.data;
};
