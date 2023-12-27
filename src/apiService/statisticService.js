import axiosInstance from "../functions/axiosInstance";

export const getStaticOrederInCountry = async () => {
    const response = await axiosInstance.get(`orders/chart/all`);
    return response.data;
};
