import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { StyledEngineProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StyledEngineProvider>
);
