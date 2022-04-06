import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventList from "../../components/Events/EventList";
import { getEvents } from "../../actions/eventActions";
import NoEventFound from "../../components/Events/NoEventFound";

const AllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.event.loading);
  const events = useSelector((state) => state.event.events);

  if (!events.length) {
    return <NoEventFound />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <EventList events={events} />;
};

export default AllEvents;
