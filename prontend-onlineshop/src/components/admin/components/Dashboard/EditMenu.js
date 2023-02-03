import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddMenu() {
    const { id } = useParams()
    console.log(id);
    const navigate = useNavigate();
    const [data, setData] = useState([])

//   const init = {
//     menuName: "",
//     link: "",
//   };

//   const [menu, setMenu] = useState(init);
  const [modal, setModal] = useState(3);
  // const [users, setUsers] = useState([]);

    
    useEffect(() => {
        fetch(`http://localhost:9000/api/menu`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.result.filter((a)=> a.id ==  id));
          setData(res.result.filter((a)=> a.id ==  id));
        })
        .catch((err) => console.log(err));
    }, [])


  const onSave = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/api/menu`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
            <span onClick={() => setModal(modal + 1)}>Edit Menu</span>\
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="id"
                value={data[0]?.id}
                              onChange={(e) => {
                    console.log(data);
                  setData({ ...data[0], id: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="menuName"
                value={data[0]?.menuName}
                onChange={(e) => {
                  setData({ ...data[0], menuName: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="link"
                value={data[0]?.link}
                onChange={(e) => {
                  setData({ ...data[0], link: e.target.value });
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={onSave} >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
