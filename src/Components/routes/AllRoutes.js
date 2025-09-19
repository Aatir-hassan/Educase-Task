import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingScreen } from "../LandingScreen";
import { LoginPage } from "../LoginPage";
import { Register } from "../Register";
import { Profile } from "../Profile";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};
