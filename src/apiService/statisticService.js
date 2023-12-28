import axiosInstance from "../functions/axiosInstance";

export const getStaticOrederInCountry = async () => {
    const response = await axiosInstance.get(`orders/chart/all`);
    return response.data;
};

export const getStaticOrderInOffice = async (officeId) => {
    const response = await axiosInstance.get(`postoffice/chart/all/${officeId}`);
    return response.data;
};

export const getStaticOrderInWarehouse = async (warehouseId) => {
    const response = await axiosInstance.get(`warehouse/chart/all/${warehouseId}`);
    return response.data;
};
