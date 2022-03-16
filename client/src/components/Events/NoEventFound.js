import React from "react";
import { Link } from "react-router-dom";
import classes from "./NoEventFound.module.css";

const NoEventFound = () => {
  return (
    <div className={classes.no_events}>
      <p>No Events Found!</p>
      <Link className={classes.btn} to="/new-event">
        Add Event
      </Link>
    </div>
  );
};

export default NoEventFound;
