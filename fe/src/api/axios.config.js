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
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE3MzM1NTY5MTAsImV4cCI6MTc2NTk1NjkxMH0.w6fzWP44DCvcfbACylhFDmZh7imUUlc8ksxK7H5lP4Y';
        // const token = JSON.parse(localStorage.getItem('token')); // nếu dùng localStorage

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
