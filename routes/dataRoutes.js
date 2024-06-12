const express = require("express");
const routesData = express.Router();
const Data = require("./../moduls/Data");
routesData.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newData = new Data(data);
    const response = await newData.save();
    console.log("data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});

routesData.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    console.log("data show successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = routesData;
