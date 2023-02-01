import React from "react";
import { useNavigate } from "react-router-dom";




export default function Header() {
    
    const navigate = useNavigate();


  return (
    <div>
      <div className="bg-dark">
        <div className="container-fluid">
          <div className="navbar bg-dark flex-nowrap">
            <a href="/admin" className=" navbar-brand text-light">
              Company Name
            </a>
            <input
              type="text"
              className="w-100 form-control bg-dark border-0"
            />
            <div className="nav text-nowrap">
              <span className="text-light"></span>
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
    </div>
  );
}
