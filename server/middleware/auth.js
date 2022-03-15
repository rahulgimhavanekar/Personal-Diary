const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findOne({
      _id: decoded._id,
    });

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Please authenticate",
    });
    console.log(error);
  }
};

module.exports = auth;
