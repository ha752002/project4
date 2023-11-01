import { apiClient } from './API.js';
// import { toast } from 'react-toastify';

export const register = async (body) => {
    try {
        const { data: dataResponse, response: response } = await apiClient.post('/api/v1/auth/register', body);
        if (dataResponse.code === 201) {
            return response.message;
        }
    } catch (error) {
        throw error;
    }
}


export const login = async (body) => {
    try {
        const { data: dataResponse, response: response } = await apiClient.post('/api/v1/auth/login', body);
        if (dataResponse.code === 200) {
            return response.message;
        }
    } catch (error) {
        throw error;
    }
}

export const logout = async () => {
    try {
        const { data: dataResponse, response: response } = await apiClient.post('/auth/logout', body);
        if (dataResponse.code === 200) {
            return response.message;
        }
    } catch (error) {
        throw error;
    }
}