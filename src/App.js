import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home/Index";
import Road from "./components/Road/Index";
import Lounge from "./components/Lounge/Index";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/road" element={<Road />} />
          <Route path="/lounge" element={<Lounge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
