import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ modal, setModal }) => {
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const onLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/user")
      .then((res) => res.json())
      .then((data) => {
        const userArr = data.result.filter(
          (e) => e.userName == username && e.userPass == password
        );

        if (userArr.length > 0) {
          localStorage.setItem("name", username);
          navigate("/product");
        } else {
          alert("Таны бүртгэл байхгүй байна");
        }
      })
      .catch((err) => console.log(err))
      .finally((finish) => console.log(finish));
  };

  const toggleModal = () => {
    console.log("clicked");
    setModal(!modal);
  };



  return (
    <div className="">
      <span className=" sign in">
        <span>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-bag-plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </span>
      </span>
      <span className="ps-4" onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </span>
      <div
        class="modal"
        style={{ display: modal ? "block" : "none" }}
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Login</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(!modal)}
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="m-1">
                  <label className="form-label" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    name="email"
                    type={"text"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="m-1">
                  <label className="form-label" htmlFor="sas">
                    Password
                  </label>
                  <input
                    name="password"
                    className="form-control"
                    type={"text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setModal(!modal)}
              >
                Close
              </button>

              <button class="btn btn-primary" onClick={onLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
