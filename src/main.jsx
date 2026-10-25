import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme/themes.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>,
);
