const tokenStore = new Set();

export const addToken = (token) => {
  tokenStore.add(token);
};

export const removeToken = (token) => {
  tokenStore.delete(token);
};

export const isTokenValid = (token) => {
  return true;
  return tokenStore.has(token);
};
