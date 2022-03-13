import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import AllEvents from "./pages/AllEvents";
import NewEvent from "./pages/NewEvent";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";
import EventEdit from "./components/Events/EventEdit";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/events" />
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
