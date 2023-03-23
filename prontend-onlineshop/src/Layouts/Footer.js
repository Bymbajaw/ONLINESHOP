import "../App.css";

import { nanoid } from "nanoid";

const footerData = [
  {
    _id: nanoid(),
    Title: "Product",
    category: [
      { _id: nanoid(), name: "New Arrivals" },
      { _id: nanoid(), name: "Best Selling" },
      { _id: nanoid(), name: "Home Decor" },
      { _id: nanoid(), name: "Kitchen Set" },
    ],
  },
  {
    _id: nanoid(),
    Title: "Services",
    category: [
      { _id: nanoid(), name: "Catalog" },
      { _id: nanoid(), name: "Blog" },
      { _id: nanoid(), name: "FaQ" },
      { _id: nanoid(), name: "Pricing" },
    ],
  },
  {
    _id: nanoid(),
    Title: "Follow Us",
    category: [
      { _id: nanoid(), name: "Facebook" },
      { _id: nanoid(), name: "Instagram" },
      { _id: nanoid(), name: "Twitter" },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="flex align-items space-between d-flex">
      <div>
        <div className="logoStyle flex align-items">
          <img src={require("./img/logo-removebg-preview.png")} alt="logo" />
        </div>
        <div className="footerText">
          <span>
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </span>
        </div>
      </div>
      <div className="footerCategory ">
        <div className="footerCategorys justify-content-end flex space-between d-flex">
          {footerData.map((data, index) => (
            <div className="ms-4 mt-4  align-start space-around " key={index}>
              <h2>{data.Title}</h2>
              {data.category.map((categorys, index) => (
                <span key={index} className="d-flex">
                  {categorys.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
