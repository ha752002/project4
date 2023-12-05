// call api
import { apiConfig } from "../configs/apiConfig.js";
const { SERVER_AUTH_API } = apiConfig;
import axios from "axios";
import queryString from 'query-string';
import Cookies from "universal-cookie";


const axiosClient = axios.create(
    (() => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        return {
            baseURL: SERVER_AUTH_API,
            headers
        }
    })()
);
axiosClient.interceptors.request.use(function (config) {
    const cookies = new Cookies();
    const token = cookies.get('jwtToken');
    console.log(token)
    // console.log(token);
    config.headers['Authorization'] = "Bearer " +  token;

    return config;
});

function buildUrl(baseUrl, params) {
    const query = queryString.stringify(params);
    const url = `${baseUrl}?${query}`;
    // console.log(url);
    return url;
}

export const apiClient = {
    get: async (url, requestParam = null) => {
        if (requestParam) {
            url = buildUrl(url, requestParam);
        }
        // console.log(url);
        const response = await axiosClient.get(url);
        return response.data;
    },

    post: async (url, body = {}) => {
        const response = await axiosClient.post(url, body,  { withCredentials: true });
        // console.log(response);
        // console.log(response.data);
        return response.data;
    },


    patch: async (url, body = {}) => {
        const response = await axiosClient.patch(url, body);
        return response.data;
    },


    put: async (url, body = {}) => {
        const response = await axiosClient.put(url, body);
        return response.data;
    },

    delete: async (url) => {
        const response = await axiosClient.delete(url);
        return response.data;
    }
};