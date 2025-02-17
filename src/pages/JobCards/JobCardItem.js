// src/pages/JobCards/JobCardItem.js
import React from "react";
import { Link } from "react-router-dom";
import "./JobCards.css";

const JobCardItem = ({ jobCard }) => {
  return (
    <div className="job-card-item">
      <h3>{jobCard.vehicle}</h3>
      <p>
        <strong>Assigned Mechanic:</strong> {jobCard.mechanic}
      </p>
      <p>
        <strong>Status:</strong> {jobCard.status}
      </p>
      <p>
        <strong>Date Created:</strong>{" "}
        {new Date(jobCard.dateCreated).toLocaleDateString()}
      </p>
      <Link to={`/jobcards/${jobCard.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default JobCardItem;
