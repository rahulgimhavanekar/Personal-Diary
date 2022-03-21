const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { signUp, login, logout } = require("../controllers/userController");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/users/logout", auth, logout);

module.exports = router;
