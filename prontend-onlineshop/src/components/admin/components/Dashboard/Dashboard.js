import axios from "axios";
import { useState } from "react";

export default function Dashboard() {
  const init = {
    productName: "",
    categoryId: 0,
    price: 0,
    images: [],
    thumbImage: "",
  };

  const [productItem, setProductItem] = useState(init);
  return (
    <div>
      <div>
        <form>
          <div>
            <div>
              <label>Bvteegdehvvnii ner</label>
            </div>
            <input type="text" />
          </div>
          <div>
            <div>
              <label>Vne</label>
            </div>
            <input type="text" />
          </div>
          <div>
            <div>
              <label>zurag</label>
              <form
                onChange={(e) => {
                  console.log(e.target.files);
                  const url =
                    "https://api.cloudinary.com/v1_1/dqnmsk4qx/upload";

                  const formData = new FormData();

                  let file = e.target.files[0];

                  formData.append("file", file);
                  formData.append("api-key", "677539896739988");
                  formData.append("folder", "shop");
                  formData.append("upload_preset", "c4o6fxma");

                  axios.post(url, formData).then((res) => {
                    console.log(res);
                    setProductItem({
                      productItem,
                      thumbImage: res.data.secure.url,
                    }).catch((err) => console.log(err));
                  });
                }}
              />
            </div>
            <input type="file" />
          </div>
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
}
