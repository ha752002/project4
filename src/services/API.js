// call api
import { config } from "./config.js";
const { SERVER_AUTH_API } = config;
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const axiosClient = axios.create(
    () => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const token = cookies.get('JWT_TOKEN');
        if (token) {
            headers['Authorization'] = `Bearer ` + token;
        }
        return {
            url: SERVER_AUTH_API,
            headers
        }
    }
);

function buildUrl(baseUrl, params) {
    const url = new URL(baseUrl);

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            url.searchParams.set(key, params[key]);
        }
    }

    return url.toString();
}

export const apiClient = {
    get: async (url, requestParam = null) => {
        try {
            url = buildUrl(url, requestParam);
            const response = await axiosClient.get(url);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },

    post: async (url, body = {}) => {
        try {
            const response = await axiosClient.post(url, body);
            // console.log(response);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },


    patch: async (url, body = {}) => {
        try {
            const response = await axiosClient.patch(url, body);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },


    put: async (url, body = {}) => {
        try {
            const response = await axiosClient.put(url, body);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },

    delete: async (url) => {
        try {
            const response = await axiosClient.delete(url);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    }
};




