import axiosInstance from "../functions/axiosInstance";

export const getAllOffice = async () => {
    const response = await axiosInstance.get(`postoffice/all`);
    return response.data.postOffices;
};

export const getOfficeById = async (id) => {
    try {
        const response = await axiosInstance.get(`postoffice/${id}`);
        return response.data.postOffice;
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};
export const getAllOfficeWithoutManager = async () => {
    const response = await axiosInstance.get(`postoffice/all/notHavePostOfficeManagers`);
    return response.data.postOfficesWithoutManager;
};

export const createNewOffice = async (district, province) => {
    try {
        const response = await axiosInstance.request(
            `postoffice/new/warehouseID=${province.warehouseId}`,
            {
                method: "post",
                data: {
                    district: district,
                },
            }
        );
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const deleteOfficeById = async (id) => {
    try {
        const response = await axiosInstance.delete(`postoffice/${id}`);
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
};

export const getAllOfficeManager = async () => {
    const response = await axiosInstance.get(`postoffice/all/postofficeManagers/`);
    return response.data.officeManagers;
};

export const getOfficeManagerByOfficeId = async (id) => {
    try {
        const response = await axiosInstance.get(`postoffice/manager/${id}`);
        // Return the response for further processing
        console.log(response);
        return response;
    } catch (error) {
        // Handle errors

        if (
            error.response.data.message ==
            "postOfficeManager not found for the specified postOffice"
        ) {
            const response1 = {
                data: {
                    postOfficeManager: {
                        name: "None",
                    },
                },
            };
            return response1;
        }
        console.error("Error fetching data:", error.response.data.message);
    }
};
