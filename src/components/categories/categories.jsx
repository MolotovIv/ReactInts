import "./categories.scss";
import React from "react";
import IconsList from "./iconsList";
import Toggler from "./toggler";

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

        <IconsList />
      </div>
    </div>
  );
}

export default Categories;
