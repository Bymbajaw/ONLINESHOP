import axios from "axios";
import { useState } from "react";
import { Form } from "react-router-dom";

export default function Dashboard() {
  const init = {
    title: "",
    description: "",
    category: "",
    rating: 0,
    price: 0,
    brand: "",
    image: [],
  };

  const [productItem, setProductItem] = useState(init);
  return (
    <div>
      <form>
        <div className="mb-3">
          <label>Бүтээгдэхүүний нэр</label>
          <input
            className="form-control"
            value={productItem.title}
            onChange={(e) => {
              setProductItem({ ...productItem, title: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Vne</label>
          <input
            className="form-control"
            value={productItem.price}
            onChange={(e) => {
              setProductItem({ ...productItem, price: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            className="form-control"
            value={productItem.description}
            onChange={(e) => {
              setProductItem({ ...productItem, description: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Zurag</label>
          <input
            className="form-control"
            onChange={(e) => {
              const url = "https://api.cloudinary.com/v1_1/dqnmsk4qx/upload";

              const formData = new FormData();

              let file = e.target.files[0];

              formData.append("file", file);
              formData.append("api_key", "677539896739988");
              formData.append("folder", "shop");
              formData.append("upload_preset", "c4o6fxma");

              axios
                .post(url, formData)
                .then((res) => {
                  console.log(res);

                  setProductItem({
                    ...productItem,
                    image: res.data.secure_url,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            type="file"
            multiple
          />
        </div>
      </form>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}
