import React, { useEffect, useState } from "react";

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
    <div>
      <div className="">
        <a href="/admin/addproduct">
          <div className="btn btn-primary mt-3">Add Product</div>
        </a>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>IMG</th>
            <th>CLOTHES</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>BRAND</th>
          </thead>
          <tbody>
            {product.map(
              ({ id, title, description, price, image, brand }, i) => {
                return (
                  <tr key={i}>
                    <td>{<img src={image} className="images"></img>}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{price}</td>
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
