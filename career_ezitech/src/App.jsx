import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { AdminDashboard } from "./pages/admin/pages/AdminDashboard";
import { NewApplicants } from "./pages/admin/pages/NewApplicants";
import { ProfileView } from "./pages/admin/pages/ProfileView";
import { AdminLogin } from "./pages/admin/pages/AdminLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Register />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/new-applicants" element={<NewApplicants />} />
          <Route path="/profile-view/:id" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
