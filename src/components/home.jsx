import React from "react";
import Search from "./search/search";
import Cardrow from "./cardrow";
import { useState } from "react";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <h1>Все вещи</h1>

      <Search inputValue={inputValue} setInputValue={setInputValue} />
      <Cardrow inputValue={inputValue} />
    </React.Fragment>
  );
};
