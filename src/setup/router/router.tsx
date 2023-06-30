import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public/publicRoutes";
import { useUserContext } from "../contexts/UserContext";
import TokenService from "../services/token.service";

export const Router = () => {
  const { setUser } = useUserContext();
  useEffect(() => {
    const access_token = TokenService.getTokenFromLocalStorage();
    console.log("access_token", access_token);
    if (access_token) {
      const user = TokenService.getUserInToken(access_token) as any;
      setUser(user);
    }
  }, []);

  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
