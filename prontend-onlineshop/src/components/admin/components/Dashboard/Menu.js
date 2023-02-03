import React, { useEffect, useState } from "react";

export default function Menu() {
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

  const onDelete = (id) => {
    fetch(`http://localhost:9000/api/menu/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getData();
      })
      .catch((err) => console.log(err));
  };

  const onEdit = (id) => {
    fetch(`http://localhost:9000/api/menu`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="">
        {menus.map(({ menuName }, i) => {
          return (
            <div key={i} className="btn btn-light">
              <p>{menuName}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="row ">
        <thead>
          <a href="/admin/addmenu">
            <div className="btn btn-danger">Add Menu</div>
          </a>
        </thead>
        <tbody className="">
          {menus.map(({ id, menuName, link }, i) => {
            return (
              <tr key={i} className="row mt-3">
                <td className="col-3">{menuName}</td>
                <td className="col-3">{link}</td>
                <td className="col-4 ">
                  <div className="justify-content-between d-flex">
                    <a
                      href={`/admin/editmenu/${id}`}
                      className="btn btn-warning col-6"
                      onClick={() => onEdit(id)}
                    >
                      Edit
                    </a>
                    <button
                      className="btn btn-primary col-4"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </div>
    </div>
  );
}
