import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
    </Routes>
  );
};
