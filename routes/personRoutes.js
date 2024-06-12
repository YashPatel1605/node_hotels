const express = require("express");
const router = express.Router();
const Person = require("./../moduls/Person");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newData = new Person(data);
    const response = await newData.save();
    console.log("data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data show successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person id not found" });
    }
    console.log("data deleted successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
