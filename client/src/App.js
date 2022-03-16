import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import AllEvents from "./pages/Events/AllEvents";
import NewEvent from "./pages/Events/NewEvent";
import EventDetail from "./pages/Events/EventDetail";
import NotFound from "./pages/NotFound";
import EventEdit from "./components/Events/EventEdit";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Auth/Profile";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route
            path="/"
            exact
            component={() =>
              !loggedIn ? <Redirect to="/signup" /> : <Redirect to="/events" />
            }
          />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/events" component={AllEvents} />
          <Route path="/events/:eventId" exact component={EventDetail} />
          <Route path="/events/:eventId/edit" component={EventEdit} />
          <Route path="/new-event" component={NewEvent} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
