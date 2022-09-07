import "./categories.scss";
import React from "react";

const categories = ["футболки", "кофты", "штаны"];
function Categories() {
  const [activeClass, setActiveClass] = React.useState(0);

  return (
    <div className="content-top">
      <div className="categories">
        <ul>
          {categories.map((value, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveClass(index);
              }}
              className={activeClass == index ? "active" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="header-list">
          <li>
            <img src="/img/case.png" alt="heart icon"></img>
            <span>1205</span>
          </li>
          <li>
            <img src="/img/vector.png" alt="icon"></img>
          </li>
          <li>
            <img src="/img/union.png" alt="icon"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
