const User = require("../models/user");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const email = req.body.email;
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(409).json({
      message: "Account already exists",
    });
  }

  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).json({
      message: "Account has been created successfully",
      data: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong Please try again later!",
    });
  }
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Account doesn't exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect Password!",
      });
    }

    const token = await user.generateAuthToken();
    res.status(200).json({
      data: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong Please try again later!",
    });
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong Please try again later!",
    });
  }
};

const getProfile = async (req, res) => {
  res.status(200).json({
    data: req.user,
  });
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));

    await req.user.save();
    res.status(200).json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong Please try again later!",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).json({
      data: req.user,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong Please try again later!",
    });
  }
};

module.exports = {
  signUp,
  getProfile,
  login,
  updateUser,
  deleteUser,
  logout,
};
