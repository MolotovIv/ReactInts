import { useState } from "react";
import "./form.scss";

import React from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          className="logButton"
          onClick={() => handleClick(email, password)}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export { Form };
