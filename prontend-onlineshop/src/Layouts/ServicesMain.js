import { nanoid } from "nanoid";
import React from "react";

export default function ServicesMain() {
  const Servic = [
    {
      _id: nanoid(),
      number: "01",
      title: "Furniture",
      text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
    {
      _id: nanoid(),
      number: "02",
      title: "Furniture",
      text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
    {
      _id: nanoid(),
      number: "03",
      title: "Furniture",
      text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
    {
      _id: nanoid(),
      number: "04",
      title: "Furniture",
      text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
    {
      _id: nanoid(),
      number: "05",
      title: "Furniture",
      text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
    {
      _id: nanoid(),
      number: "06",
      title: "Furniture",
      text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
  ];

  return (
    <div>
      <div className="services-header">
        <div className="services-title">
          <h1>Services</h1>
        </div>
        <div className="services-title">
          <p>
            The product crafted by talented crafter and using high quality
            material with love inside
          </p>
        </div>
      </div>
      <div className="services-img">
        <img
          src="https://www.savethestudent.org/uploads/colourful-clothes-on-a-rail.jpg"
          alt=""
        />
      </div>
      <div className="services-list">
        {Servic.map((e) => (
          <div className="services-list">
            <h1>{e.number}</h1>
            <h4>{e.title}</h4>
            <span>{e.text}</span>
          </div>
        ))}
          </div>
          <div>
        <div>
          <div>
            <span className="textCategory">Protofolia</span>
            <h2>Amazing projext we've done before</h2>
          </div>
          <div>
            <span>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </span>
            <span>View Portofolia</span>
          </div>
        </div>
        <div>
          <img src={require("./Services img/Services1.png")} alt="" />
          <img src={require("./Services img/Services2.png")} alt="" />
          <img src={require("./Services img/Services3.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
