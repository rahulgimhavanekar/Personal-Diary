import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, signup } from "../../actions/authActions";

import classes from "./AuthForm.module.css";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchModeHandler = () => {
    setIsSigningUp((prevState) => !prevState);
    setName("");
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isSigningUp) {
      const userCredentials = {
        name: name,
        email: email,
        password: password,
      };
      console.log(name, email, password);

      dispatch(signup(userCredentials, history));
    } else {
      const userCredentials = {
        email: email,
        password: password,
      };
      console.log(email, password);

      dispatch(login(userCredentials, history));
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.card}>
      <p className={classes.heading}>{isSigningUp ? "Sign up" : "Login"}</p>
      <form className={classes.form} onSubmit={submitHandler}>
        {isSigningUp && (
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
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
          <button>{isSigningUp ? "Sign up" : "Login"}</button>
          <p className={classes.signup} onClick={switchModeHandler}>
            {isSigningUp
              ? "Already Have an account? Login"
              : "Don't have and account? Sign up"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
