// routes/jobCards.js
const express = require("express");
const router = express.Router();
const JobCard = require("../models/JobCard");

// Get all job cards
router.get("/", async (req, res) => {
  try {
    const jobCards = await JobCard.find();
    res.json(jobCards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job cards", error });
  }
});

module.exports = router;
