const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db/db");
const cors = require("cors");
const eventRouter = require("./routers/eventRouter");
const userRouter = require("./routers/userRouter");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

db.on("open", () => {
  console.log("Database connection established");
});

app.use("/api", eventRouter);
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

// const Event = require("./models/event");
// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("6231c5047b31ad3830114c5a").populate(
//     "events"
//   );
//   console.log(user.events);
// };

// main();
