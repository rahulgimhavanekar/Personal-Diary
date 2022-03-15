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

// const password = "Rahul123@";

// async function hp(pwd) {
//   const hashedPassword = await bcrypt.hash(pwd, 8);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("rahul123@", hashedPassword);
//   console.log(isMatch);
// }

// hp(password);
