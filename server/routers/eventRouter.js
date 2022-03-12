const express = require("express");
const router = express.Router();
const {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.get("/events", getEvents);
router.get("/events/:id", getEventById);
router.post("/new-event", createEvent);
router.patch("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;
