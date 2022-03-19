import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const existingToken = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        existingToken ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivateRoute;
