import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

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
                <a href="/admin/uielements">UI Elements</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/advencedui">Advenced UI</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/formelements">Form elements</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/popups">Popups</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/notification">Notification</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/charts">Charts</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/tables">Tables</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/maps">Maps</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/userpages">User Pages</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/errorpages">Error Pages</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/generalpages">General Pages</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/ecommerce">E-commerce</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/apps">Apps</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/documentation">Documentation</a>
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
