const Event = require("../models/event");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events.length) {
      return res.status(404).json({
        message: "No events Found",
      });
    }
    res.status(200).json({
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

const createEvent = async (req, res) => {
  const event = new Event(req.body);
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

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

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
  try {
    const event = await Event.findById(req.params.id);

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
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

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
