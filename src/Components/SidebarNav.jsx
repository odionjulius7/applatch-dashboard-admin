import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCodesandbox, FiUsers, FiLogOut } from "react-icons/fi";
import UseAuth from "../Hooks/UseAuth";

export default function SidebarNav() {
  const [dashboradActive, setDashboradActive] = useState(
    JSON.parse(localStorage.getItem("dashboradActive")) || false
  );
  const [userActive, setUserActive] = useState(
    JSON.parse(localStorage.getItem("userActive")) || false
  );
  const [viralityActive, setViralityActive] = useState(
    JSON.parse(localStorage.getItem("viralityActive") || false)
  );
  const [signup, setSignup] = useState(false);
  // const [signup, setSignup] = useState(
  //   JSON.parse(localStorage.getItem("signup") || false)
  // );

  useEffect(() => {
    localStorage.setItem("dashboradActive", JSON.stringify(dashboradActive));
    localStorage.setItem("userActive", JSON.stringify(userActive));
    localStorage.setItem("viralityActive", JSON.stringify(viralityActive));

    // localStorage.setItem("signup", JSON.stringify(signup));
  }, [dashboradActive, userActive, viralityActive]);

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
                setSignup(false);
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
                setSignup(false);
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
                setSignup(false);
              }}
            >
              <FiUsers className="link-icon" />
              <span className="link-title">Virality</span>
            </Link>
          </li>

          <li className="nav-item nav-category">Account</li>

          <li className={`nav-item ${signup ? "active" : ""}`}>
            <Link
              to="signup"
              className="nav-link"
              onClick={() => {
                setSignup(true);
                setViralityActive(false);
                setUserActive(false);
                setDashboradActive(false);
              }}
            >
              <FiLogOut className="link-icon" />
              <span className="link-title">Register</span>
            </Link>
          </li>
          {
            <li className="nav-item">
              <a href="" className="nav-link">
                <FiLogOut className="link-icon" />
                <span
                  onClick={() => window.localStorage.clear()}
                  className="link-title"
                >
                  Sign Out
                </span>
              </a>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
}
