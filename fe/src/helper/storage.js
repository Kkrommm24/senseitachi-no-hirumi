export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUserId = (id) => {
  localStorage.setItem('id', id);
};

export const clearStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('language');
};

// Add functions for language preference
export const getLanguage = () => {
  return localStorage.getItem('language');
};

export const setLanguage = (language) => {
  localStorage.setItem('language', language);
};
