import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/auth");
  };

  return (
    <div className={classes.main}>
      <p className={classes.title}>Welcome to Diary App</p>
      <p className={classes.subtitle}>
        A place where you can save your personal events or memories just like
        writing a personal diary.
      </p>
      <p className={classes.subtitle}>
        <span className={classes.click_here} onClick={clickHandler}>
          Click here
        </span>{" "}
        to signup or login
      </p>
    </div>
  );
};

export default Home;
