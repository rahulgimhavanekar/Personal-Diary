import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent } from "../../actions/eventActions";
import classes from "./EventForm.module.css";

const EventEdit = () => {
  const event = useSelector((state) => state.event);
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateEvent(params.eventId, {
        title: title,
        description: description,
      })
    );
    history.push("/events");
  };

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="10"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};

export default EventEdit;
