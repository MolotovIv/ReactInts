import React from "react";
import Search from "./search/search";
import Cardrow from "./cardrow";

export const Home = () => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <React.Fragment>
      <h1>Все вещи</h1>

      <Search inputValue={inputValue} setInputValue={setInputValue} />

      <Cardrow inputValue={inputValue} />
    </React.Fragment>
  );
};
