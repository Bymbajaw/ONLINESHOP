import React from "react";
import { ArticleCard } from "./ArticleCard";

export default function ArticleMain() {
  return (
    <div>
      <div>
        <div className="">
          <h1>Article</h1>
          <p>
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
        <div>
          <img src={require("./Article img/ArticlePage.png")} alt="" />
        </div>
        <div>
          <h1>Article</h1>
          <p>
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
        <div>
          <img src={require("./Article img/ArticlePage.png")} alt="" />
          <p>
            Tips and TrickThis 400-Square-Foot New York Apartment Is Maximized
            With Custom Millworkavatar
          </p>
        </div>
      </div>
      <div className="">
        <div>
          <div>
            <span>Daily News</span>
            <h2>Today top headlines</h2>
          </div>
          <div>
            {ArticleCard.map((card, index) => (
              <div
                key={index}
                className="articleBody articleItem d-flex gap-4 mt-5"
              >
                <img width={"280px"} src={card.img} alt="" />
                <div>
                  <span className="article-text">{card.cotegory}</span>
                  <h2>{card.title}</h2>
                  <span className="article-text">{card.text}</span>
                  <div>
                    {card.user.map((avatar, index) => (
                      <div className="article-sub" key={index}>
                        <div>
                          <img src={avatar.img} alt="" />
                          <span className="article-sub-title">
                            {avatar.name}
                          </span>
                        </div>
                        <span className="article-text">{avatar.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
