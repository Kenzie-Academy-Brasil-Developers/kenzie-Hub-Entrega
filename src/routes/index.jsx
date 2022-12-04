import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
