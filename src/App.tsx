import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import P1 from "./pages/p1";
import Home from "./pages/home";
import React from "react";

function App() {
  window.document.title = "test";
  return (
    <React.Fragment>
      <BrowserRouter>
        <aside className="bg-slate-500 p-5">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/P1">p1</Link>
            </li>
          </ul>
        </aside>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/p1"
            element={<P1 />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
