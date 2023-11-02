import { apiClient } from './API.js';

export const register = async (body) => {
    const response = await apiClient.post('/api/v1/auth/register', body);
    // console.log(response);
    return response;

}


export const login = async (body) => {
    const response = await apiClient.post('/api/v1/auth/login', body);
    // console.log(response);
    return response;
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