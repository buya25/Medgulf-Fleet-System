// routes/parts.js
const express = require("express");
const router = express.Router();
const Part = require("../models/Part");

// Get all parts
router.get("/", async (req, res) => {
  try {
    const parts = await Part.find();
    res.json(parts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching parts", error });
  }
});

module.exports = router;
