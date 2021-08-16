import axios from 'axios';
import CONSTANTS from '@shared/constants/urls';

/*global BASE_URL */
/*eslint no-undef: "error"*/
const API = axios.create({
    baseURL: CONSTANTS.BASE_URL,
    timeout: 2000,
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
    },
});

/**
 * api request interceptor
 * @param {Object} req request object
 * @returns 
 */
const handleRequest = async (req) => {
    return req;
};

/**
 * api error interceptor
 * @param {Object} error error object
 * @returns 
 */
const handleError = (error) => {
    return Promise.reject(parsed_error?.response?.data);
};

/**
 * api response interceptor
 * @param {Object} response response object
 * @returns 
 */
const handleResponse = (response) => {
    return Promise.resolve(response.data);
};

API.interceptors.request.use(handleRequest);
API.interceptors.response.use(handleResponse, handleError);

export default API;