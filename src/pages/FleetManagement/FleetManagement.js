// src/pages/FleetManagement/FleetManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import FleetItem from "./FleetItem";
import "./FleetManagement.css";

const FleetManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch vehicles from backend
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("/api/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  // Filter vehicles based on search term
  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fleet-management-page">
      <h1>Fleet Management</h1>
      <div className="fleet-controls">
        <input
          type="text"
          placeholder="Search by model or license plate..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button className="add-vehicle-button">+ Add Vehicle</button>
      </div>
      <div className="fleet-list">
        {filteredVehicles.map((vehicle) => (
          <FleetItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default FleetManagement;
