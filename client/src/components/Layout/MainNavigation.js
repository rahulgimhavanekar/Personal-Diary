import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";
import decode from "jwt-decode";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    const existingToken = localStorage.getItem("token");

    if (existingToken) {
      const decodedToken = decode(existingToken);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout(history);
      }
    }
  }, [dispatch, history]);

  const logoutHandler = () => {
    dispatch(logout(history));
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Diary</div>
      <nav className={classes.nav}>
        <ul>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/signup">Signup</Link>
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
                <Link onClick={logoutHandler} to="/#">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
