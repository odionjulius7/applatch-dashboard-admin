import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiCodesandbox,
  FiUsers,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import "./componentStyles/SidebarNav.css";

import { SiGnuprivacyguard } from "react-icons/si";
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
  const [allRefer, setAllRefer] = useState(
    JSON.parse(localStorage.getItem("allRefer") || false)
  );
  const [currentRefer, setCurrentRefer] = useState(
    JSON.parse(localStorage.getItem("currentRefer") || false)
  );

  const [signup, setSignup] = useState(false);

  useEffect(() => {
    localStorage.setItem("dashboradActive", JSON.stringify(dashboradActive));
    localStorage.setItem("userActive", JSON.stringify(userActive));
    localStorage.setItem("viralityActive", JSON.stringify(viralityActive));
    localStorage.setItem("allRefer", JSON.stringify(allRefer));
    localStorage.setItem("currentRefer", JSON.stringify(currentRefer));

    // localStorage.setItem("signup", JSON.stringify(signup));
  }, [dashboradActive, userActive, viralityActive, allRefer, currentRefer]);

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link
          onClick={() => {
            // setViralityActive(false);
            setUserActive(false);
            setDashboradActive(true);
            setSignup(false);
            setAllRefer(false);
            setCurrentRefer(false);
          }}
          to={"/"}
          className="sidebar-brand"
        >
          Applatch
          <span style={{ paddingLeft: "5px", color: "#727cf5" }}>Admin</span>
        </Link>
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
                // setViralityActive(false);
                setUserActive(false);
                setDashboradActive(true);
                setSignup(false);
                setAllRefer(false);
                setCurrentRefer(false);
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
                // setViralityActive(false);
                setUserActive(true);
                setDashboradActive(false);
                setSignup(false);
                setAllRefer(false);
                setCurrentRefer(false);
              }}
            >
              <FiUsers className="link-icon" />
              <span className="link-title">Users</span>
            </Link>
          </li>
          <li className={`nav-item ${currentRefer ? "active" : ""}`}>
            <Link
              to={"topReferrals"}
              className="nav-link"
              role="button"
              aria-expanded="false"
              aria-controls="tables"
              onClick={() => {
                setUserActive(false);
                setDashboradActive(false);
                setSignup(false);
                setAllRefer(false);
                setCurrentRefer(true);
              }}
            >
              <FiUsers className="link-icon" />
              <span className="link-title">Top Referrals</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <div
              to={""}
              className="nav-link"
              role="button"
              aria-expanded="false"
              aria-controls="tables"
              onClick={() => setViralityActive((prev) => !prev)}
            >
              <FiUsers className="link-icon" />
              <span className="link-title">Referrals</span>
              {viralityActive ? (
                <FiChevronDown style={{ fontSize: "1.4rem" }} />
              ) : (
                <FiChevronUp style={{ fontSize: "1.4rem" }} />
              )}
            </div>
            <div
              className="collapse-menu"
              id={viralityActive ? "id-collapse" : ""}
            >
              <ul className="sub-menu">
                <li className={`nav-item ${allRefer ? "active" : ""}`}>
                  <Link
                    to="allReferer"
                    className="nav-link"
                    onClick={() => {
                      // setViralityActive(false);
                      setUserActive(false);
                      setDashboradActive(false);
                      setSignup(false);
                      setAllRefer(true);
                      setCurrentRefer(false);
                    }}
                  >
                    All referrals
                  </Link>
                </li>
                <li className={`nav-item ${currentRefer ? "active" : ""}`}>
                  <Link
                    to="currentReferer"
                    className="nav-link"
                    onClick={() => {
                      // setViralityActive(false);
                      setUserActive(false);
                      setDashboradActive(false);
                      setSignup(false);
                      setAllRefer(false);
                      setCurrentRefer(true);
                    }}
                  >
                    Current referrals
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}

          <li className="nav-item nav-category">Account</li>

          <li className={`nav-item ${signup ? "active" : ""}`}>
            <Link
              to="signup"
              className="nav-link"
              onClick={() => {
                setSignup(true);
                // setViralityActive(false);
                setUserActive(false);
                setDashboradActive(false);
                setAllRefer(false);
                setCurrentRefer(false);
              }}
            >
              <SiGnuprivacyguard className="link-icon" />
              <span className="link-title">Register</span>
            </Link>
          </li>
          {
            <li className="nav-item">
              <a href="" className="nav-link">
                <FiLogOut className="link-icon" />
                <span
                  onClick={() => {
                    // delete everythin
                    // window.localStorage.clear();
                    // delete something specific
                    localStorage.removeItem("data");
                  }}
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
