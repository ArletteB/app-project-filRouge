import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    } else {
      console.error("Erreur de requête :", error);
    }
    throw error;
  }
);

export const setAuthorizationHeader = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default instance;
