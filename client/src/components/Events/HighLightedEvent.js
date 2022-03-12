import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import classes from "./HighLightedEvent.module.css";

const HighLightedEvent = () => {
  const [event, setEvent] = useState({});

  const params = useParams();

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

  return (
    <div className={classes.event_detail}>
      <h1 className={classes.title}>{event.title}</h1>
      <h4 className={classes.date}>{event.createdAt}</h4>
      <p className={classes.description}>{event.description}</p>
    </div>
  );
};

export default HighLightedEvent;
