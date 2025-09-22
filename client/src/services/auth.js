import axios from "axios";

const login = async (username, password) => {
    try {
        const response = await axios.post("http://localhost:4000/api/login", {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const register = async (username, password) => {
    try {
        const response = await axios.post("http://localhost:4000/api/register", {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { login, register };