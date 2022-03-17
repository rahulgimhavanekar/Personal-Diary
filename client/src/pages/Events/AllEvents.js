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

  const events = useSelector((state) => state.event.events);

  if (!events.length) {
    return <NoEventFound />;
  }

  return <EventList events={events} />;
};

export default AllEvents;

// const DUMMY_EVENTS = [
//   {
//     id: 1,
//     title: "My First Job",
//     description:
//       "Got my First Job today. I can't tell you how excited i am for this. I feel like it's a new start for me and I am going to make myself proud.",
//     date: "20th June 2022",
//   },
//   {
//     id: 2,
//     title: "Drove car for first time",
//     description:
//       "Today I drove a car for the first time. Rahul needed some help to as he is moving to new place. So he needed someone to drive for him since he can't drive for atleast 2 weeks.",
//     date: "20th June 2022",
//   },
// ];
