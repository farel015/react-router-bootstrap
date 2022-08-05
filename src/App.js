import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
      </Routes>
    </div>
  );
}

export default App;
