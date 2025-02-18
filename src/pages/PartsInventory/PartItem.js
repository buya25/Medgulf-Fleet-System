// src/pages/PartsInventory/PartItem.js
import React from "react";
import { Link } from "react-router-dom";
import "./PartsInventory.css";

const PartItem = ({ part }) => {
  return (
    <div className="part-item">
      <h3>{part.name}</h3>
      <p>
        <strong>Part Number:</strong> {part.partNumber}
      </p>
      <p>
        <strong>Stock Quantity:</strong> {part.quantity}
      </p>
      <p>
        <strong>Supplier:</strong> {part.supplier}
      </p>
      <Link to={`/parts/${part.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default PartItem;
