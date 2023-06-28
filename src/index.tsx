import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { Router } from "./setup/router/router";
import { UserProvider } from "./setup/contexts/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <Router />
  </UserProvider>
);
