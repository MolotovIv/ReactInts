import "./search.scss";
import React from "react";

function Search() {
  return (
    <div>
      <div className="sort">
        <div className="sort__label">
          <input className="searchInput" placeholder="Поиск"></input>
        </div>
        <div className="sort__popup"></div>
      </div>
    </div>
  );
}
export default Search;
