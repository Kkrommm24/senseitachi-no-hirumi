import axios from 'axios'
import queryString from 'query-string'

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

API.interceptors.request.use(
  function (req) {
    // Lấy token từ localStorage hoặc sử dụng token cố định để kiểm tra
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMzU4MDE3NSwiZXhwIjoxNzMzNTgzNzc1fQ.XYnURRvrsqlq2dBguWCz2IR6hHoowtI90MyME5jr5kI';
    // const token = JSON.parse(localStorage.getItem('token')); // nếu dùng localStorage
    // const token = undefined; // Nếu không có token

    if (token) {
      req.headers['Authorization'] = `Bearer ${token}`;
    }
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default API
