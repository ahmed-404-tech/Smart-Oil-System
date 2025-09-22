import axios from "axios";

const addOil = async (oilData) => {
    try {
        const response = await axios.post("http://localhost:4000/api/add-oil", oilData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getOils = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/oils");
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getOneOil = async (id) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/oils/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateOil = async (id, dataForm) => {
    try {
        const response = await axios.put(`http://localhost:4000/api/oils/${id}`, dataForm);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteOil = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/api/oils/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { addOil, getOils, getOneOil, updateOil, deleteOil };