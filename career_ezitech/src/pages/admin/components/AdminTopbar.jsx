import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminTopbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.clear();
    alert("Logout Successfully!!!");
    navigate("/admin-login");
  };
  return (
    <>
      <nav className="navbar navbar-expand px-3 border-bottom">
        <p>
          <button
            className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </p>
        <div className="navbar-collapse navbar">
          <ul className="navbar-nav">
            <li className="nav-item align-self-center flex-wrap px-4">
              <p className="marquee">
                <span>
                  {" "}
                  <strong>Admin</strong> &nbsp;&nbsp;&nbsp;{" "}
                </span>
              </p>
            </li>
            <div className="logout">
              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
