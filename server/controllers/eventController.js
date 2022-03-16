const Event = require("../models/event");

const createEvent = async (req, res) => {
  const event = new Event({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await event.save();
    res.status(201).json({
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

const getEvents = async (req, res) => {
  try {
    await req.user.populate("events");

    if (!req.user.events.length) {
      return res.status(404).json({
        message: "No events Found",
      });
    }

    res.status(200).json({
      data: req.user.events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
    console.log(error);
  }
};

const getEventById = async (req, res) => {
  const id = req.params.id;

  try {
    const event = await Event.findOne({ _id: id, owner: req.user._id });

    if (!event) {
      return res.status(404).json({
        message: "No event found",
      });
    }
    res.status(200).json({
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

const updateEvent = async (req, res) => {
  const updates = Object.keys(req.body);
  const id = req.params.id;

  try {
    const event = await Event.findOne({ _id: id, owner: req.user._id });

    if (!event) {
      return res.status(404).json({
        message: "No event found",
      });
    }

    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();
    res.status(200).json({
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
    console.log(error);
  }
};

const deleteEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const event = Event.findOneAndDelete({ _id: id, owner: req.user._id });

    if (!event) {
      return res.status(404).json({
        message: "No event found",
      });
    }

    res.status(200).json({
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
};
