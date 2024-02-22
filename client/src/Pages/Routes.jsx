import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analyse from "./analyse/Analyse";
import Home from "./home/Home";
import NoPage from "./NoPage";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
