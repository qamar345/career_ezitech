import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
