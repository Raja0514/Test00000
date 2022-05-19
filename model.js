const mongoose = require("mongoose");

const schema = new mongoose.Schema({ name: String, lastname: String });

const Tank = mongoose.model("Tank", schema);

module.exports = Tank;
