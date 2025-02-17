// src/pages/FleetManagement/FleetItem.js
import React from "react";
import { Link } from "react-router-dom";
import "./FleetManagement.css";

const FleetItem = ({ vehicle }) => {
  return (
    <div className="fleet-item">
      <h3>{vehicle.model}</h3>
      <p>
        <strong>License Plate:</strong> {vehicle.licensePlate}
      </p>
      <p>
        <strong>Status:</strong> {vehicle.status}
      </p>
      <p>
        <strong>Driver:</strong> {vehicle.driver}
      </p>
      <Link to={`/fleet/${vehicle.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default FleetItem;
