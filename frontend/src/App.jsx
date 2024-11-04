import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Component
import Navbar from "./components/Navbar";
// Pages
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
const App = () => {
  return (
    <div className="h-screen w-full bg-black p-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;
