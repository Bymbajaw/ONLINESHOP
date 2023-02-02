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

  return (
    <div>
      <div className="row ">
        <thead>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {menus.map(({ id, menuName }, i) => {
            return (
              <tr key={i} className="row">
                <td className="col-6">{menuName}</td>
                <td className="col-4 ">
                  <div className="justify-content-between d-flex">
                  <button
                    className="btn btn-warning col-6"
                    // onClick={() => onEdit(id)}
                  >
                    Edit
                  </button>
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
