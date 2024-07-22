import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({});

  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  // https://api.ezitech.org
  const Login = () => {
    if (value.email !== undefined && value.password !== undefined) {
      axios
        .post("https://api.career.ezitech.org/admin-auth", { value })
        .then((res) => {
          if (res.data.isLoggedIn === true) {
            sessionStorage.setItem("username", res.data.user[0].name);
            sessionStorage.setItem("email", res.data.user[0].email);
            sessionStorage.setItem("token", res.data.token);

            //   sessionStorage.setItem("contact", res.data.user[0].contact);
            sessionStorage.setItem("isLoggedIn", true);
            alert("Login Successfully");
            navigate("/admin-dashboard");
          } else {
            alert("Invalid User!!!");
          }
        });
    } else {
      alert("Please empty fields first!!!");
    }
  };
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="login-img col-lg-8 p-5 text-center">
            <img src="admin/assets/images/login-img.png" width="70%" alt="" />
          </div>
          <div className="col-lg-4 p-lg-5 form-login">
            <div className="container mt-5 px-5">
              <h4 className="pt-5">Welcome Back Admin</h4>
              {/* <p style={{fontSize: "0.8rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aspernatur quos sed, doloremque magnam dignissimos
              exercitationem
            </p> */}
              <div className="form-field">
                <div className="form-group mt-4">
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group mt-4">
                  <label for="Password">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="forget-pass mt-2">
                  <a href="">Forget Password?</a>
                </div>
              </div>
              <div className="container">
                <div className="submit-btn row mt-4">
                  <a
                    href="#"
                    type="button"
                    onClick={Login}
                    className="btn btn-primary"
                  >
                    {" "}
                    Login{" "}
                  </a>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <hr />
                </div>
                <div className="col">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
