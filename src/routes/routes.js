import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home, Details } from "../modules";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
