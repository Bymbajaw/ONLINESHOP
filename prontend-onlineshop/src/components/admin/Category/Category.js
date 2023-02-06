import React, { useEffect, useState } from "react";

export default function Category() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCate();
      }, []);

    const getCate = () => {
        fetch("http://localhost:9000/api/cate")
          .then((res) => res.json())
          .then((cateData) => {
            console.log("saved");
            console.log(cateData);
            setCategory(cateData.result);
          })
          .catch((err) => console.log(err));
    };


    const onDelete = (id) => {
        const url = `http://localhost:9000/api/cate/${id}`;
    
        fetch(url, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("saved");
            console.log(data);
            getCate();
          })
          .catch((err) => console.log(err));
      };
    
    

  return (
    <div className="mt-3">
      <a href="/admin/addcate" className="btn btn-primary">
        Add Category
      </a>
      <div className="table-responsive">
        <table className="table">
          <thead>
            {category.map(({ id, cateName }, i) => {
              return (
                <tr key={id}>
                  <td>{cateName}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
}
