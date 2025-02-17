import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaTruck,
  FaTools,
  FaChartBar,
} from "react-icons/fa";
import { useUser } from "../context/UserContext";

const Sidebar = () => {
  const { user } = useUser();

  const sidebarItems = [
    { label: "Dashboard", icon: <FaHome />, link: "/dashboard" },
    { label: "Job Cards", icon: <FaClipboardList />, link: "/jobcards" },
    {
      label: "Fleet Management",
      icon: <FaTruck />,
      link: "/fleet",
      role: "Admin",
    },
    {
      label: "Parts Inventory",
      icon: <FaTools />,
      link: "/parts",
      role: "Admin",
    },
    { label: "Reports", icon: <FaChartBar />, link: "/reports", role: "Admin" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Garage Management</h2>
      </div>
      <div className="sidebar-body">
        <ul>
          {sidebarItems.map(
            (item, index) =>
              (!item.role || item.role === user.role) && (
                <li key={index} className="sidebar-item">
                  <NavLink to={item.link} activeClassName="active-link">
                    {item.icon}
                    <span className="sidebar-label">{item.label}</span>
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
