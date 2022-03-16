import React from "react";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes.card}>
      <form className={classes.form}>
        <p>Login</p>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
