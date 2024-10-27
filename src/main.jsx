import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx"; // Corrected 'AuthProvider' import
import { BrowserRouter } from "react-router-dom";
import { UtilsContextProvider } from "./context/UtilsContext.jsx"; // Fixed import for UtilsContextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* Optional but good for identifying potential problems */}
    <BrowserRouter>
      <AuthProvider>
        <UtilsContextProvider>
          <App />
        </UtilsContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
