import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminTopbar } from "../components/AdminTopbar";
import Bg from "../assets/bg.png";

export const ProfileView = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const checkLoggedIn = sessionStorage.getItem("isLoggedIn");
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  if (!checkLoggedIn) {
    navigate("/admin");
  }

  const GetSingle = async () => {
    try {
      const res = await axios.get(
        `https://api.career.ezitech.org/get-single-applicant/${id}`,
        { headers: { "x-access-token": token } }
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSingle();
  }, [GetSingle]);

  return (
    <>
      <div className="wrapper">
        <AdminSidebar />
        <div className="main">
          <AdminTopbar />
          <main className="content px-3 py-2">
            <div className="container-fluid">
              {data.map((rs) => {
                const {
                  image,
                  name,
                  technology,
                  email,
                  phone,
                  cnic,
                  gender,
                  join_date,
                  birth_date,
                  university,
                  degree,
                  duration,
                  previous_work,
                } = rs;

                return (
                  <>
                    <div className="container" style={{ marginTop: "10px" }}>
                      <div className="card overflow-hidden">
                        <div className="card-body p-0">
                          <img src={Bg} alt="" className="img-fluid" />
                          <div className="row align-items-center">
                            <div className="col-lg-4 order-lg-1 order-2"></div>
                            <div className="col-lg-4 mt-n3 order-lg-2 order-1">
                              <div className="mt-n5">
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                  <div
                                    className="linear-gradient d-flex align-items-center justify-content-center rounded-circle"
                                    style={{ width: "110px", height: "110px" }}
                                  >
                                    <div
                                      className="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden"
                                      style={{
                                        width: "110px",
                                        height: "110px",
                                      }}
                                    >
                                      <img
                                        src={image}
                                        alt=""
                                        className="w-100 h-100"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <h5 className="fs-5 mb-0 fw-semibold">
                                    {name}
                                  </h5>
                                  <p className="mb-0 fs-5">{technology}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 order-last"></div>
                          </div>
                          <ul
                            className="nav nav-pills user-profile-tab justify-content-end mt-2 bg-light-info rounded-2"
                            id="pills-tab"
                            role="tablist"
                          ></ul>
                        </div>
                      </div>

                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-gallery"
                          role="tabpanel"
                          aria-labelledby="pills-gallery-tab"
                          tabindex="0"
                        >
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Email
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {email}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Isuava wakceajo fe.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Contact
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {phone}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Ip docmowe vemremrif.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        CNIC
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {cnic}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Duan cosudos utaku.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Gender
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {gender}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Fu netbuv oggu.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Join Date
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {join_date}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Di sekog do.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Date of Birth
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {birth_date}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Lo jogu camhiisi.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        University
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {university}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Orewac huosazud robuf.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Degree Program
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {degree}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Nira biolaizo tuzi.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Contract Duration
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {duration}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Peri metu ejvu.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="card hover-img overflow-hidden rounded-2">
                                <div className="card-body p-0">
                                  <div className="p-4 d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        Previous Work with Complete Details
                                      </h6>
                                      <span className="text-dark fs-4">
                                        {previous_work}
                                      </span>
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="text-muted fw-semibold d-flex align-items-center p-1"
                                        href="javascript:void(0)"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ti ti-dots-vertical"></i>
                                      </a>
                                      <ul className="dropdown-menu overflow-hidden">
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                          >
                                            Vurnohot tajraje isusufuj.jpg
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
