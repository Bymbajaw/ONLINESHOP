import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCate() {
  const init = {
    cateName: ""
  };

  const [cate, setCate] = useState(init);


  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/cate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        navigate("/admin/category");
      })
      .catch((err) => console.log(err));
  };
  const butsah = () => {
    navigate("/admin/category");
  };

  return (
    <div>
      <div>
        <h4>Add Category</h4>
      </div>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="cateName"
            value={cate.cateName}
            onChange={(e) => {
              setCate({ ...cate, cateName: e.target.value });
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
