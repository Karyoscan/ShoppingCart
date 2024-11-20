import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="bg-yellow-200/50" >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
