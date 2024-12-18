import axios from 'axios';
import queryString from 'query-string';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

API.interceptors.request.use(
    function (req) {
        const token = '7c1dac99392c81a66697b4b8ae1acd4613d4d042f282a736fe9da8d8bc518267b9550c6422cfb7b3d8b805743fafeb9319b090074032e944792f8b24c7b2bfc1';
        // const token = localStorage.getItem('token'); // nếu dùng localStorage

        if (token) {
            req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default API;
