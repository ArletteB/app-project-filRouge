import { ResetPassword } from "../types/auth/user.type";

export const AuthService = {};

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
