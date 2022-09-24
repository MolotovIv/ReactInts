import "./search.scss";
import debounce from "lodash.debounce";
import React from "react";

function Search({ setInputValue }) {
  const [value, setValue] = React.useState("");

  const updateValue = React.useCallback(
    debounce((str) => {
      setInputValue(str);
    }, 1000),
    []
  );
  const onChangeValue = (event) => {
    setValue(event.target.value);
    updateValue(value);
  };

  const inputRef = React.useRef(null);
  const onButtonClick = () => {
    inputRef.current.focus();
    setValue("");
    setInputValue("");
  };

  return (
    <div>
      <div className="sort">
        <div className="sort__label" style={{ position: "relative" }}>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => onChangeValue(event)}
            className="searchInput"
            placeholder="Поиск"
          />
          {value && (
            <img
              onClick={onButtonClick}
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
