import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { Router } from "./setup/router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
