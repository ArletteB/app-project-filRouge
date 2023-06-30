import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
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

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const setAuthorizationHeader = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default api;
