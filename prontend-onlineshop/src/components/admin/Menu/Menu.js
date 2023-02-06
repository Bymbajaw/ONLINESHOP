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
      <div className="">
        <a href="/admin/addmenu">
          <div className="btn btn-primary">Add Menu</div>
        </a>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <th>MenuName</th>
              <th>Link</th>
            </thead>
            <tbody className="">
              {menus.map(({ id, menuName, link }, i) => {
                return (
                  <tr key={i} className="">
                    <td>{menuName}</td>
                    <td>{link}</td>
                    <td>
                      <a
                        href={`/admin/editmenu/${id}`}
                        className="btn btn-warning "
                        onClick={() => onEdit(id)}
                      >
                        Edit
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger "
                        onClick={() => onDelete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>  
        </div>
      </div>
    </div>
  );
}
