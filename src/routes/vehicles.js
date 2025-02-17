// routes/vehicles.js
const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Get all vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicles", error });
  }
});

module.exports = router;
