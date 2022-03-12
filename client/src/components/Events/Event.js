import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";
import classes from "./Event.module.css";

const Event = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteEventHandler = () => {
    dispatch(deleteEvent(props.id));
    history.push("/events");
  };

  return (
    <section className={classes.event}>
      <h2 className={classes.title}>{props.title}</h2>
      <h4 className={classes.date}>{props.date}</h4>
      <h4 className={classes.description}>{`${props.description.slice(
        0,
        50
      )}...`}</h4>
      <div className={classes.actions}>
        <Link to={`/events/${props.id}`}>Read More</Link>
        <button className={classes.update}>Update</button>
        <button className={classes.delete} onClick={deleteEventHandler}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default Event;
