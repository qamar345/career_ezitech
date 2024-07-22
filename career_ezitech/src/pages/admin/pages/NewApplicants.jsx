import React, { useEffect, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminTopbar } from "../components/AdminTopbar";
import { AdminFooter } from "../components/AdminFooter";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const NewApplicants = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const checkLoggedIn = sessionStorage.getItem("isLoggedIn");
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  if (!checkLoggedIn) {
    navigate("/admin-login");
  }

  const GetAllApplicants = async () => {
    try {
      const res = await axios.get("https://api.career.ezitech.org/get-all-applicants", {
        headers: { "x-access-token": token },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetSingle = (id) => {
    alert(id);
    navigate(`/profile-view/${id}`);
  };

  useEffect(() => {
    GetAllApplicants();
  }, [GetAllApplicants]);

  return (
    <>
      <div className="wrapper">
        <AdminSidebar />
        <div className="main">
          <AdminTopbar />
          <main className="content px-3 py-2">
            <div className="container-fluid">
              <div
                className="mt-4 mb-5"
                // style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    New Applicants
                  </li>
                </ol>
              </div>
              <div className="row">
                <div className="col-12 d-flex">
                  <div className="card flex-fill border-0 illustration shadow">
                    <div className="card-body p-0 d-flex flex-fill">
                      <div className="row g-0 w-100">
                        <div className="col-6">
                          <div className="p-3 m-1">
                            <h4>WelcomeBack, Admin</h4>
                            <p className="mb-0">Admin Dashboard</p>
                          </div>
                        </div>
                        <div className="col-6 align-self-end text-end">
                          <img
                            src="admin/assets/images/customer-support.jpg"
                            className="img-fluid illustration-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow">
                <div className="card-title p-3">New Applicants</div>

                <div className="card-header">
                  <div className="card-body overflow-x-auto text-center">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Avatar</th>
                          <th scope="col">Full Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Contract Duration</th>
                          <th scope="col">Technology</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((rs) => {
                          const {
                            id,
                            eti_id,
                            image,
                            name,
                            email,
                            phone,
                            duration,
                            technology,
                          } = rs;

                          return (
                            <>
                              <tr>
                                <td scope="col">
                                  {" "}
                                  <Link
                                    type="button"
                                    onClick={() => GetSingle(id)}
                                    style={{
                                      color: "black",
                                      fontWeight: "bold",
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    {eti_id}
                                  </Link>{" "}
                                </td>
                                <td scope="col">
                                  <img
                                    src={image}
                                    className="border rounded p-1"
                                    alt=""
                                    width={50}
                                    height={50}
                                  />
                                </td>
                                <td scope="col">{name}</td>
                                <td scope="col">{email}</td>
                                <td scope="col">{phone}</td>
                                <td scope="col">{duration}</td>
                                <td scope="col">{technology}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </>
  );
};
