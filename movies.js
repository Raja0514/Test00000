const express = require("express");
const Tank = require("./model");

const router = express.Router();

const Cat = require("./model");

router.get("/", async (req, res) => {
  try {
    const ajmi = await Cat.find();
    res.json(ajmi);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const doc = new Tank({
    name: req.body.name,
    lastanme: req.body.lastname,
  });

  try {
    const Cat = await doc.save();
    res.json(Cat);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
