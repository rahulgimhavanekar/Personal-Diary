import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Event.module.css";
import convertDate from "../../utils/convertDate";

const Event = (props) => {
  const history = useHistory();

  const detailsHandler = () => {
    history.push(`/events/${props.id}`);
  };

  const myDate = convertDate(props.date);

  return (
    <section className={classes.event}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.date}>{myDate}</p>
      <p className={classes.description}>{`${props.description.slice(
        0,
        50
      )}...`}</p>
      <div className={classes.actions}>
        <button onClick={detailsHandler}>Read More</button>
      </div>
    </section>
  );
};

export default Event;
