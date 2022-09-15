import "./categories.scss";
import React from "react";
import { Link } from "react-router-dom";

const categories = ["Все", "футболки", "кофты", "штаны"];
function Categories({ category, onChangeCategory }) {
  return (
    <div>
      <div className="content-top">
        <div className="categories">
          <ul>
            {categories.map((value, index) => (
              <li
                key={index}
                onClick={() => {
                  onChangeCategory(index);
                }}
                className={category == index ? "active" : ""}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="header-list">
            <Link to="basket">
              <li>
                <img src="/img/case.png" alt="heart icon"></img>
              </li>
            </Link>

            <li>
              <img src="/img/vector.png" alt="icon"></img>
            </li>
            <li>
              <img src="/img/union.png" alt="icon"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
