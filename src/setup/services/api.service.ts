import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

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

// instance.interceptors.request.use((config: AxiosRequestConfig) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${token}`,
//     };
//   }
//   return config;
// });

export default instance;
