import React from "react";
import ReactDOM from "react-dom/client";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import App from "./App.jsx";

import "./index.css";

import {
  AuthProvider,
} from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);