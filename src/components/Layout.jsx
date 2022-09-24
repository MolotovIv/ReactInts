import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme ? "light" : "dark"}>{children}</div>;
};

export default Layout;
