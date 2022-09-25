import React from "react";
import Search from "./search/search";
import Cardrow from "./cardrow";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const { isAuth, email } = useAuth();
  const [inputValue, setInputValue] = React.useState("");

  return isAuth ? (
    <React.Fragment>
      <h1>Все вещи</h1>

      <Search inputValue={inputValue} setInputValue={setInputValue} />

      <Cardrow inputValue={inputValue} />
    </React.Fragment>
  ) : (
    <Navigate to="login" />
  );
};
