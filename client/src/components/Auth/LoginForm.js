import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/authActions";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    dispatch(login(userCredentials, history));

    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.card}>
      <p className={classes.heading}>Login</p>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <p
            className={classes.signup}
            onClick={() => {
              history.push("/signup");
            }}
          >
            Don't have an account? Sign up
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
