import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMenu() {
  const init = {
    menuName: "",
    link: "",
  };

  const [menu, setMenu] = useState(init);
  const [modal, setModal] = useState(3);
  // const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        navigate("/admin/menu");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 ">
          <form>
            <span onClick={() => setModal(modal + 1)}>Add Menu</span>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="menuName"
                value={menu.menuName}
                onChange={(e) => {
                  setMenu({ ...menu, menuName: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="link"
                value={menu.link}
                onChange={(e) => {
                  setMenu({ ...menu, link: e.target.value });
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={onSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
