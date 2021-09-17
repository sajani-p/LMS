import axios from "../shared/axios";

// Utility functions
export const getRequest = async (url) => {
    try {
        let response = await axios.get(url);

        return {
            data: response.data,
            error: null
        };
    } catch (error) {
        return {
            data: null,
            error: error
        };
    }
};