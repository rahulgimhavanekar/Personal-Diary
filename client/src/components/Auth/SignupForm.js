import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../actions/authActions";

import classes from "./SignupForm.module.css";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const userCredentials = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(signup(userCredentials, history));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.card}>
      <p className={classes.heading}>Sign up</p>
      <form className={classes.form} onSubmit={submitHandler}>
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
          <button>Sign up</button>
          <p
            className={classes.signup}
            onClick={() => {
              history.push("/login");
            }}
          >
            Already Have an account? Login
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
