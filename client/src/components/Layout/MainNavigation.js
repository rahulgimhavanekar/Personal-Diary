import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../actions/actionTypes";
import decode from "jwt-decode";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const existingToken = localStorage.getItem("token");

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
  }, [dispatch]);

  useEffect(() => {
    if (existingToken) {
      const decodedToken = decode(existingToken);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    history.push("/auth");
  }, [history, existingToken, logout]);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Diary</div>
      <nav className={classes.nav}>
        <ul>
          {!existingToken ? (
            <>
              <li>
                <Link to="/auth">Authenticate</Link>
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
                <Link onClick={logout} to="/#">
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
