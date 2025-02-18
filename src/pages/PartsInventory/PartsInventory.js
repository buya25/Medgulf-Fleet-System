// src/pages/PartsInventory/PartsInventory.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PartItem from "./PartItem";
import "./PartsInventory.css";

const PartsInventory = () => {
  const [parts, setParts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch parts from backend
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get("/api/parts");
        setParts(response.data);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

  // Filter parts based on search term
  const filteredParts = parts.filter(
    (part) =>
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="parts-inventory-page">
      <h1>Parts Inventory</h1>
      <div className="parts-controls">
        <input
          type="text"
          placeholder="Search by name or part number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button className="add-part-button">+ Add Part</button>
      </div>
      <div className="parts-list">
        {filteredParts.map((part) => (
          <PartItem key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default PartsInventory;
