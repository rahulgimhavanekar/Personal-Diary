import React from "react";
import classes from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <div className={classes.card}>
      <form className={classes.form}>
        <p>Sign Up</p>

        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
