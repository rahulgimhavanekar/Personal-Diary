const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  signUp,
  getProfile,
  deleteUser,
  updateUser,
  login,
  logout,
} = require("../controllers/userController");

router.post("/users/signup", signUp);
router.post("/users/login", login);
router.get("/users/me", auth, getProfile);
router.patch("/users/me/edit", auth, updateUser);
router.delete("/users/me", auth, deleteUser);
router.post("/users/logout", auth, logout);

module.exports = router;
