import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public/publicRoutes";

export const Router = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
