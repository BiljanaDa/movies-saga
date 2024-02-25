import React from "react";
import { Route, Routes } from "react-router-dom";
import AppMovies from "./pages/AppMovies";

export default function router() {
  return (
    <Routes>
      <Route exact path="/movies" element={<AppMovies />} />
    </Routes>
  );
}
