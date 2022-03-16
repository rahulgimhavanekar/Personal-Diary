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

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/events" />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events" exact>
            <AllEvents />
          </Route>
          <Route path="/events/:eventId" exact>
            <EventDetail />
          </Route>
          <Route path="/events/:eventId/edit">
            <EventEdit />
          </Route>
          <Route path="/new-event">
            <NewEvent />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
