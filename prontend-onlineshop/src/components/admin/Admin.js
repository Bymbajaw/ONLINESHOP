import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:9000/api/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenus(data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="bg-dark ">
          <div className="container-fluid">
            <div className="navbar bg-dark flex-nowrap">
              <a href="/admin" className="navbar-brand text-light">
                Future UI
              </a>
              <input
                type="text"
                className="w-100 form-control bg-dark border-0"
              />
              <div className="nav text-nowrap">
                <span className="text-light">
                  {localStorage.getItem("name")}
                </span>
                <span
                  className="text-light"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log Out
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="list-group">
              <div className="list-group-item">
                <a href="/admin/dashboard">Dashboard</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/menu">Menu</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/products">Products</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/category">Category</a>
              </div>
            </div>
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
