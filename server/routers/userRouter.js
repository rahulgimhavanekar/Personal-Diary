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

router.post("/signup", signUp);
router.post("/login", login);
router.post("/users/logout", auth, logout);
router.get("/users/me", auth, getProfile);
router.patch("/users/me/edit", auth, updateUser);
router.delete("/users/me", auth, deleteUser);

module.exports = router;
