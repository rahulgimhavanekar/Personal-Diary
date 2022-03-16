import React from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  return (
    <section className={classes.notification}>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
