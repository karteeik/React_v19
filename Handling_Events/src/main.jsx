import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { EventPropagation } from "./Components/EventPropagation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <EventPropagation></EventPropagation>
  </StrictMode>
);
