const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const eventRouter = require("./routers/eventRouter");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

db.on("open", () => {
  console.log("Database connection established");
});

app.get("/", (req, res) => {
  res.send("Hey there diary app");
});

app.use("/api", eventRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
