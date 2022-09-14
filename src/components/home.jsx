import React from "react";
import Search from "./search";
import Cardrow from "./cards";
import { useState } from "react";

export const homeContext = React.createContext();

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <h1>Все вещи</h1>
      <homeContext.Provider value={{ inputValue, setInputValue }}>
        <Search />
        <Cardrow />
      </homeContext.Provider>
    </React.Fragment>
  );
};
