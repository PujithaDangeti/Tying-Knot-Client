import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routers/AppRouters";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
