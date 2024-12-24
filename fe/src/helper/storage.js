export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUserId = (id) => {
  localStorage.setItem('id', id);
};

export const clearToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
};
