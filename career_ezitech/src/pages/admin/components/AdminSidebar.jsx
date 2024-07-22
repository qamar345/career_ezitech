import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <>
      <div
        id="collapseWidthExample"
        className="collapse collapse-horizontal bg-dark"
      >
        <div className="sidebar h-100" style={{ width: "200px" }}>
          <div className="sidebar-logo">
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link to="/admin-dashboard" className="sidebar-link">
                <i className="fa-solid fa-house pe-2"></i>Dashboard
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to="/new-applicants" className="sidebar-link">
                <i className="fa-solid fa-users pe-2"></i>New Applicants
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
