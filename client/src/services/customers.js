import axios from "axios";

const addCustomer = async (customerData) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/add-customer",
            customerData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getCustomers = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/customers");
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getOneCustomer = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/customers/${id}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateCustomer = async (id, dataForm) => {
    try {
        const response = await axios.put(
            `http://localhost:4000/api/customers/${id}`,
            dataForm
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteCustomer = async (id) => {
    try {
        const response = await axios.delete(
            `http://localhost:4000/api/customers/${id}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {
    addCustomer,
    getCustomers,
    getOneCustomer,
    updateCustomer,
    deleteCustomer,
};