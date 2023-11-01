// call api
import { config } from "./config.js";
const { SERVER_AUTH_API } = config;
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
export const apiClient = axios.create({
    baseURL: SERVER_AUTH_API,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})


// export const apiClient = axios.create(() => {
//     const token = cookies.get('JWT_Token');
//     const headers = {
//         "Content-type": "application/json",
//     }

//     if (token) {
//         headers.Authorization = "Bearer " + token;
//     }

//     return {
//         baseURL: SERVER_AUTH_API,
//         headers
//     }
// });

// export const client = {
//     serverApi: SERVER_AUTH_API,

//     setUrl: function (url) {
//         this.serverApi = url;
//     },

//     get: function (url) {
//         return this.send(url, "GET", null);
//     },

//     post: function (url, body = {}) {
//         return this.send(url, "POST", body);
//     },

//     put: function (url, body = {}) {
//         return this.send(url, "PUT", body);
//     },

//     patch: function (url, body = {}) {
//         return this.send(url, "PATCH", body);
//     },

//     delete: function (url) {
//         return this.send(url, "DELETE");
//     },
// };