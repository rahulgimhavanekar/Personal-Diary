import React, { Fragment, useState } from "react";
import { Prompt, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent } from "../../actions/eventActions";
import classes from "./EventForm.module.css";

const EventEdit = () => {
  const event = useSelector((state) => state.event);
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [isEnteringForm, setIsEnteringForm] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const formFocusHandler = () => {
    setIsEnteringForm(true);
  };

  const finishedEnteringHandler = () => {
    setIsEnteringForm(false);
  };

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
    <Fragment>
      <Prompt
        when={isEnteringForm}
        message="Are you sure you want to leave? All your data will be lost!"
      />
      <div className={classes.card}>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitHandler}
        >
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
            <button onClick={finishedEnteringHandler}>Update</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default EventEdit;
