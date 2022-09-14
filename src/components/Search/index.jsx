import "./search.scss";
import React from "react";
import { homeContext } from "../home";

function Search() {
  const { inputValue, setInputValue } = React.useContext(homeContext);
  console.log(inputValue);
  return (
    <div>
      <div className="sort">
        <div className="sort__label" style={{ position: "relative" }}>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="searchInput"
            placeholder="Поиск"
          />
          {inputValue && (
            <img
              onClick={() => setInputValue("")}
              className="clearIcon"
              src="/img/x.png"
              alt="seacrch icon"
            ></img>
          )}
        </div>
        <div className="sort__popup"></div>
      </div>
    </div>
  );
}
export default Search;
