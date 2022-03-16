import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Diary</div>
      <nav className={classes.nav}>
        <ul>
          {!loggedIn ? (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/events">All Events</Link>
              </li>
              <li>
                <Link to="/new-event">Add Event</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
