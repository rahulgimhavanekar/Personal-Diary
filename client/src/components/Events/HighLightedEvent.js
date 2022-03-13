import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";
import convertDate from "../../utils/convertDate";
import classes from "./HighLightedEvent.module.css";

const HighLightedEvent = () => {
  const [event, setEvent] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const getSingleEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/events/${params.eventId}`
        );
        const data = response.data.data;
        setEvent(data);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleEvent();
  }, [params.eventId]);

  const deleteEventHandler = () => {
    dispatch(deleteEvent(params.eventId));
    history.push("/events");
  };

  const myDate = convertDate(event.createdAt);

  return (
    <div className={classes.event_detail}>
      <h1 className={classes.title}>{event.title}</h1>
      <h4 className={classes.date}>{myDate}</h4>
      <p className={classes.description}>{event.description}</p>
      <div className={classes.actions}>
        <button className={classes.update}>Update</button>
        <button className={classes.delete} onClick={deleteEventHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HighLightedEvent;
