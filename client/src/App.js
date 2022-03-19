import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Auth/AuthPage";
import AllEvents from "./pages/Events/AllEvents";
import NewEvent from "./pages/Events/NewEvent";
import EventDetail from "./pages/Events/EventDetail";
import NotFound from "./pages/NotFound";
import EventEdit from "./components/Events/EventEdit";
import Layout from "./components/Layout/Layout";

import PrivateRoute from "./components/Navigation/PrivateRoute";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AuthPage} />
          <PrivateRoute exact path="/events" component={AllEvents} />
          <PrivateRoute exact path="/events/:eventId" component={EventDetail} />
          <PrivateRoute
            exact
            path="/events/:eventId/edit"
            component={EventEdit}
          />
          <PrivateRoute exact path="/new-event" component={NewEvent} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
