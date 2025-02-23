import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import React, { lazy, Suspense } from "react";

const NavBar = React.lazy(() => import("./components/navBar.tsx"));
const Home = lazy(() => import("./pages/home.tsx"));
const Page1 = React.lazy(() => import("./pages/page1.tsx"));
const PageNotFound = React.lazy(() => import("./components/pageNotFound.tsx"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar></NavBar>
          <div className="relative">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              ></Route>
              <Route
                path="/:lang"
                element={<Home />}
              />
              <Route
                path="/page1"
                element={<Page1 />}
              />
              <Route
                path="*"
                element={<PageNotFound />}
              ></Route>
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
