import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import NavBar from "./navbar.js";
import Products from "./products.js";
import Cart from "./cart.js";

function App() {
  const noteState = useSelector((state) => state.increase);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
