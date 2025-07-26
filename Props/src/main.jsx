import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Container } from "./Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <App /> 
    </Container>

    <Container>
      <h1>How are you</h1>
    </Container>
    {/* We use multiple time container call with many argument */}
  </StrictMode>
);
