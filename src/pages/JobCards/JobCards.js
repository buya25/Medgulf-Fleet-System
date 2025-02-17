// src/pages/JobCards/JobCards.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCardItem from "./JobCardItem";
import "./JobCards.css";

const JobCards = () => {
  const [jobCards, setJobCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch job cards data from backend
  useEffect(() => {
    const fetchJobCards = async () => {
      try {
        const response = await axios.get("/api/jobcards");
        setJobCards(response.data);
      } catch (error) {
        console.error("Error fetching job cards:", error);
      }
    };

    fetchJobCards();
  }, []);

  // Filter job cards based on search term
  const filteredJobCards = jobCards.filter(
    (card) =>
      card.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-cards-page">
      <h1>Job Cards</h1>
      <div className="job-cards-controls">
        <input
          type="text"
          placeholder="Search by vehicle or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button className="create-job-button">+ New Job Card</button>
      </div>
      <div className="job-cards-list">
        {filteredJobCards.map((card) => (
          <JobCardItem key={card.id} jobCard={card} />
        ))}
      </div>
    </div>
  );
};

export default JobCards;
