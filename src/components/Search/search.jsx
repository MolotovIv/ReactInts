import "./search.scss";
import React from "react";

function Search({ inputValue, setInputValue }) {
  const inputRef = React.useRef(null);
  const onButtonClick = () => {
    inputRef.current.focus();
    setInputValue("");
  };

  return (
    <div>
      <div className="sort">
        <div className="sort__label" style={{ position: "relative" }}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="searchInput"
            placeholder="Поиск"
          />
          {inputValue && (
            <img
              onClick={() => onButtonClick()}
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
