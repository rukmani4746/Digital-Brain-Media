const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./models/userModel");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const route = require("./routes/route");
const PORT = process.env.PORT || 4000

const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect("mongodb+srv://rukmanisdb:vjycEqeXgt3fpaS7@cluster0.fw901z3.mongodb.net/TODOLIST", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

app.use("/", route);

app.listen(PORT, () => console.log("server running on port 4000"));
