import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

const NavBar = React.lazy(() => import("./components/navBar.tsx"));
const Page1 = React.lazy(() => import("./pages/page1.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {" "}
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/page1"
          element={<Page1 />}
        />
        <Route
          path="*"
          element={<App />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
