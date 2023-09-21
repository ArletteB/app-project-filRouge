import jwtDecode from "jwt-decode";

const getUserInToken = (access_token: string) => {
  const user = jwtDecode(access_token);
  return user;
};

// Stockage du jeton d'authentification dans le local storage
const setTokenInLocalStorage = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};

const getTokenFromLocalStorage = () => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) return null;
  if (!isValidToken(access_token)) {
    removeTokenFromLocalStorage();
    return null;
  }
  return access_token;
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("access_token");
};

const isValidToken = (access_token: string) => {
  const tokendecode = jwtDecode(access_token) as any;
  const currentTime = Date.now() / 2000;
  if (tokendecode.exp < currentTime) {
    return false;
  }
  return true;
};

const TokenService = {
  getUserInToken,
  setTokenInLocalStorage,
  getTokenFromLocalStorage,
};
export default TokenService;
