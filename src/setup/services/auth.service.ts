import { ResetPassword } from "../types/auth/user.type";
import api from "./api.service";

const AUTH_ENDPOINT = "/auth";

const signin = async (credentials: any) => {
  const response = await api.post(`${AUTH_ENDPOINT}/signin`, credentials);

  return response.data;
};

// const signup = async (credentials) => {
//   const response = await api.post(`${AUTH_ENDPOINT}/signup`, credentials)
//   return response.data
// }

export const resetPassword = async (data: ResetPassword) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/reset-password/${data.token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );
  const json = await response.json();
  return json;
};

const AuthService = {
  signin,
};

export default AuthService;
