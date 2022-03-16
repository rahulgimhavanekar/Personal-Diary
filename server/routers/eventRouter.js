const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.post("/new-event", auth, createEvent);
router.get("/events", auth, getEvents);
router.get("/events/:id", auth, getEventById);
router.patch("/events/:id/edit", auth, updateEvent);
router.delete("/events/:id", auth, deleteEvent);

module.exports = router;
