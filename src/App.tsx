import "./App.css";
import { Routes, Route } from "react-router";
import React, { lazy, Suspense } from "react";
import UseScrollToTop from "./hooks/scrollTop.ts";

const NavBar = React.lazy(() => import("./components/navBar.tsx"));
const Home = lazy(() => import("./pages/home.tsx"));
const Page1 = React.lazy(() => import("./pages/page1.tsx"));
const PageNotFound = React.lazy(() => import("./components/pageNotFound.tsx"));

function App() {
  UseScrollToTop();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div className="relative">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            {/* <Route
              path="/:lang"
              element={<Home />}
            /> */}
            <Route
              path="/page1"
              element={<Page1 />}
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
