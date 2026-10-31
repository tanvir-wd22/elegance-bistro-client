import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import webRouter from "./routes/webRouter";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={webRouter} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
);
