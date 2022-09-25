import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/register/SignUp";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account?<Link to="/login"> SIGN IN</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
