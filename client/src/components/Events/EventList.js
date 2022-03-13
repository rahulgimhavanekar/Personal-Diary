import React from "react";
import Event from "./Event";
import classes from "./EventList.module.css";

const EventList = (props) => {
  return (
    <div className={classes.list}>
      {props.events.map((event) => {
        return (
          <Event
            key={event._id}
            id={event._id}
            title={event.title}
            description={event.description}
            date={event.createdAt}
          />
        );
      })}
    </div>
  );
};

export default EventList;
