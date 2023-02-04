import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:9000/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        setProduct(data.result);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    const url = `http://localhost:9000/api/product/${id}`;

    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="row d-flex">
        <a href="/admin/addproduct">
          <div className="btn btn-primary mt-3">Add Product</div>
        </a>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            {product.map(
              ({ id, title, description, price, image, brand }, i) => {
                return (
                  <tr key={i}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{image}</td>
                    <td>{brand}</td>
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
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
