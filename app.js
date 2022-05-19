const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", () => {
  console.log("database connected");
});

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server  running successfully  on port ${PORT}`)
);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const Datak = require("./movies");
app.use("/movies", Datak);
