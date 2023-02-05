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
  const butsah = () => {
    navigate("/admin/menu");
  };

  return (
    <div>
      <div>
        <h4>Add Menu</h4>
      </div>
      <form>
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
        <div className="row gap-3">
          <button className="btn btn-primary col-1" onClick={onSave}>
            Save
          </button>
          <button className="btn btn-primary col-1" onClick={butsah}>
            Буцах
          </button>
        </div>
      </form>
    </div>
  );
}
