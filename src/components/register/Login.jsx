import React from "react";
import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let nav = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        nav("/");
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form title="sig in" handleClick={handleLogin} />
    </div>
  );
};

export { Login };
