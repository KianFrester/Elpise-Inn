import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterPage from "./routes.jsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KindeProvider
      clientId="8813101a1af04b83a85382eda0553200"
      domain="https://kianmaximo.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <RouterPage />
    </KindeProvider>
  </StrictMode>
);
