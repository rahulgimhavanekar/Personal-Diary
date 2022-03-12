const Event = require("../models/event");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events.length) {
      return res.status(404).json({
        success: false,
        message: "No events Found",
      });
    }
    res.json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const createEvent = async (req, res) => {
  const event = new Event(req.body);
  try {
    await event.save();
    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      res.status(404).json({
        success: false,
        message: "No event found",
      });
    }
    res.json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const updateEvent = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      res.status(404).json({
        success: false,
        message: "No event found",
      });
    }

    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();
    res.json({
      sucess: true,
      data: event,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    res.json({
      sucess: true,
      data: event,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
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