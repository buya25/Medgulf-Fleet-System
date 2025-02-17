import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ label, icon, link }) => {
  return (
    <li className="sidebar-item">
      <Link to={link}>
        <span className="sidebar-icon">{icon}</span>
        <span className="sidebar-label">{label}</span>
      </Link>
    </li>
  );
};
