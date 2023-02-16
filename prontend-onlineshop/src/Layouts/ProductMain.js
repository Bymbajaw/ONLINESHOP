import React, { useEffect, useState } from "react";

export default function ProductMain() {
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

  return (
    <div>
      <div className="productmain-header">
        <div className="productmain">
          <h1>Products</h1>
        </div>
        <div>
          <p>
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
      </div>
      <div className="productmain-img">
        <img
          src="https://t4.ftcdn.net/jpg/03/07/50/37/360_F_307503785_VQvVDsRG82vZamMF5UaE0YvNKqHjyB0J.jpg"
          alt=""
        />
      </div>
      <div className="d-flex search-input" style={{ margin: "15px" }}>
        <div
          className="flex flex-row p-2 m-auto"
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <input
            type="text"
            placeholder=" Search property"
            style={{ width: "800px", margin: 5 }}
          />
          <button>Find Now</button>
          <button>Filter</button>
        </div>
      </div>
      <div className="productList d-flex ">
        {product.map(({ id, title, description, price, image, brand }, i) => {
          return (
            <div key={i} className="productList-bodyy col-4 mt-5">
              <div className="productList-img ">{<img src={image}></img>}</div>
              <div className="productList-title">{title}</div>
              <div className="productList-desc">{description}</div>
              <div className="productList-brand">{"Brand" + ": " + brand}</div>
              <div className="productList-price">{price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
