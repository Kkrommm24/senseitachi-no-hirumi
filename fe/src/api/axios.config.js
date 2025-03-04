import axios from 'axios';
import { getToken } from 'helper/storage';
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
    const token = getToken()
    if (token) req.headers['Authorization'] = `Bearer ${token}`
    return req
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default API;
