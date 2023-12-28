import axiosInstance from "../functions/axiosInstance";
import Cookies from "js-cookie";

export const deleteUserById = async (id) => {
    try {
        const response = await axiosInstance.delete(`user/${id}`);
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getRole = async () => {
    try {
        const response = await axiosInstance.get(`user/role`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("jwt")}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        // Handle errors
        console.error("Error fetching role:", error);
    }
};

export const createNewAccount = async (payload) => {
    try {
        const response = await axiosInstance.request(`user/register`, {
            method: "post",
            data: payload,
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const updateAccount = async (id, payload) => {
    try {
        const response = await axiosInstance.request(`user/${id}`, {
            method: "put",
            data: payload,
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`findUser/${id}`);
        console.log(response.data);
        return response.data.user;
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};
