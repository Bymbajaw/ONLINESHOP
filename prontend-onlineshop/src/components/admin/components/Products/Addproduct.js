import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addproducts() {
  const init = {
    title: "",
    description: "",
  };

  const [product, setProduct] = useState(init);
  const [modal, setModal] = useState(3);
  // const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        navigate("/admin/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 ">
          <form>
            <span onClick={() => setModal(modal + 1)}>Add Product</span>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="title"
                value={product.title}
                onChange={(e) => {
                  setProduct({ ...product, title: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="description"
                value={product.description}
                onChange={(e) => {
                  setProduct({ ...product, description: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="price"
                value={product.price}
                onChange={(e) => {
                  setProduct({ ...product, price: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                placeholder="title"
                value={product.image}
                onChange={(e) => {
                  setProduct({ ...product, image: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <select
                className="form-control"
                value={product.brand}
                onChange={(e) => {
                  setProduct({ ...product, brand: e.target.value });
                }}
              >
                <option value="0">Brand</option>
                <option value="0">Alibaba</option>
                <option value="0">Gucci</option>
                <option value="0">Mongol</option>
                <option value="0">UBcub</option>
                <option value="0">NBA</option>
                <option value="0">America</option>
              </select>
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
