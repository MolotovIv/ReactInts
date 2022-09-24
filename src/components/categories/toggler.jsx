import "./toggler.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function Toggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  const onChangeTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="toggler">
      <label onChange={onChangeTheme} className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Toggler;
