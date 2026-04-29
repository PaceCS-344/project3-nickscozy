import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router-dom"; // CHANGED: added BrowserRouter
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter> {/* CHANGED: wrapped App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);