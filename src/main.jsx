import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SciTechConferenceWithTheme from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SciTechConferenceWithTheme />
    </ThemeProvider>
  </StrictMode>
);
