import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Purchases from "./pages/Purchases";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <div className="app">
        <HashRouter>
          <Routes>
            <Route path="/" element={Login} />
            <Route element={ProtectedRoutes}>
              <Route path="/home" element={Home} />
              <Route path="/home/products/:id" element={ProductDetail} />
              <Route path="/home/register" element={Register} />
              <Route path="/home/purchases" element={Purchases} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
