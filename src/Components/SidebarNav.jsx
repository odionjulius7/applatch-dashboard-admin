import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCodesandbox, FiUsers, FiLogOut } from "react-icons/fi";

export default function SidebarNav() {
  const [dashboradActive, setDashboradActive] = useState(true);
  const [userActive, setUserActive] = useState(false);
  const [viralityActive, setViralityActive] = useState(false);

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
          Applatch
          <span style={{ paddingLeft: "5px", color: "#727cf5" }}>Admin</span>
        </a>
        <div className="sidebar-toggler not-active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav">
          <li className={`nav-item ${dashboradActive ? "active" : ""}`}>
            <Link
              to={"/"}
              className="nav-link"
              onClick={() => {
                setViralityActive(false);
                setUserActive(false);
                setDashboradActive(true);
              }}
            >
              <FiCodesandbox className="link-icon" />
              <span className="link-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item nav-category">Main</li>
          <li className={`nav-item ${userActive ? "active" : ""}`}>
            <Link
              to={"users"}
              className="nav-link"
              role="button"
              aria-expanded="false"
              aria-controls="tables"
              onClick={() => {
                setViralityActive(false);
                setUserActive(true);
                setDashboradActive(false);
              }}
            >
              <FiUsers className="link-icon" />
              <span className="link-title">Users</span>
            </Link>
          </li>
          <li className={`nav-item ${viralityActive ? "active" : ""}`}>
            <Link
              to={"virality"}
              className="nav-link"
              role="button"
              aria-expanded="false"
              aria-controls="tables"
              onClick={() => {
                setViralityActive(true);
                setUserActive(false);
                setDashboradActive(false);
              }}
            >
              <FiUsers className="link-icon" />
              <span className="link-title">Virality</span>
            </Link>
          </li>

          <li className="nav-item nav-category">Account</li>

          <li className="nav-item">
            <a href="logout.html" className="nav-link">
              <FiLogOut className="link-icon" />
              <span className="link-title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
