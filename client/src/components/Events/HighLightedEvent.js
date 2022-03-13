import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getSingleEvent } from "../../actions/eventActions";
import convertDate from "../../utils/convertDate";
import classes from "./HighLightedEvent.module.css";

const HighLightedEvent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const event = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getSingleEvent(params.eventId));
  }, [dispatch, params.eventId]);

  const deleteEventHandler = () => {
    dispatch(deleteEvent(event._id));
    history.push("/events");
  };

  const myDate = convertDate(event.createdAt);

  return (
    <div className={classes.event_detail}>
      <h1 className={classes.title}>{event.title}</h1>
      <h4 className={classes.date}>{myDate}</h4>
      <p className={classes.description}>{event.description}</p>
      <div className={classes.actions}>
        <button>
          <Link to={`/events/${event._id}/edit`}>Edit</Link>
        </button>
        <button onClick={deleteEventHandler}>Delete</button>
      </div>
    </div>
  );
};

export default HighLightedEvent;
