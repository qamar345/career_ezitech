import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { AdminDashboard } from "./admin/pages/AdminDashboard";
import { NewApplicants } from "./admin/pages/NewApplicants";
import { ProfileView } from "./admin/pages/ProfileView";
import { AdminLogin } from "./admin/pages/AdminLogin";

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
