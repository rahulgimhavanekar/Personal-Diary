import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Diary</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/events">All Events</Link>
          </li>
          <li>
            <Link to="/new-event">Add Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
