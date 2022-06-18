import React, { useState, useEffect } from "react";
import AccountabilityPartner from "../Components/AccountabilityPartner";
import PhoneUsageAnalyses from "../Components/PhoneUsageAnalyses";
import UserAddictive from "../Components/UserAddictive";
import UserProfile from "../Components/UserProfile";
//

import { FiColumns, FiHeart, FiMessageSquare } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { getUsers } from "../Data";

import { useParams } from "react-router-dom";

export default function SingleUser() {
  let data = getUsers();
  // activeClass && Displayed components
  const [profile, setProfile] = useState(true);
  const [addictive, setAddictive] = useState(false);
  const [accountability, setAccountability] = useState(false);
  const [analyses, setAnalyses] = useState(false);

  //
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(userId));
    setUser(newPerson);
  }, [userId, data]);

  // console.log(user);
  useEffect(() => {
    localStorage.setItem("profile", profile);
    localStorage.setItem("addictive", addictive);
    localStorage.setItem("accountability", accountability);
    localStorage.setItem("analyses", analyses);
  }, [profile, addictive, accountability, analyses]);

  return (
    <div className="profile-page tx-13">
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="profile-header">
            <div className="header-links">
              <ul className="links d-flex align-items-center mt-3 mt-md-0">
                <li
                  className={`header-link-item d-flex align-items-center ${
                    profile ? "active" : ""
                  }`}
                >
                  <FiColumns className="mr-1 icon-md" />
                  <a
                    className="pt-1px d-none d-md-block"
                    href="#"
                    onClick={() => {
                      setProfile(true);
                      setAccountability(false);
                      setAddictive(false);
                      setAnalyses(false);
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li
                  className={`header-link-item ml-3 pl-3 border-left d-flex align-items-center ${
                    addictive ? "active" : ""
                  }`}
                >
                  <FiHeart className="mr-1 icon-md" />
                  <a
                    className="pt-1px d-none d-md-block"
                    href="#"
                    onClick={() => {
                      setAddictive(true);
                      setProfile(false);
                      setAccountability(false);
                      setAnalyses(false);
                    }}
                  >
                    Users Addictive App
                  </a>
                </li>
                <li
                  className={`header-link-item ml-3 pl-3 border-left d-flex align-items-center ${
                    accountability ? "active" : ""
                  }`}
                >
                  <FiMessageSquare className="mr-1 icon-md" />
                  <a
                    className="pt-1px d-none d-md-block"
                    href="#"
                    onClick={() => {
                      setAccountability(true);
                      setProfile(false);
                      setAddictive(false);
                      setAnalyses(false);
                    }}
                  >
                    Accountability Partner
                  </a>
                </li>
                <li
                  className={`header-link-item ml-3 pl-3 border-left d-flex align-items-center ${
                    analyses ? "active" : ""
                  }`}
                >
                  <AiOutlineBarChart className="mr-1 icon-md" />
                  <a
                    className="pt-1px d-none d-md-block"
                    href="#"
                    onClick={() => {
                      setAnalyses(true);
                      setProfile(false);
                      setAccountability(false);
                      setAddictive(false);
                    }}
                  >
                    Phone Usage Analyses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {profile && <UserProfile {...user} />}
      {addictive && <UserAddictive {...user} />}
      {accountability && <AccountabilityPartner {...user} />}
      {analyses && <PhoneUsageAnalyses />}
    </div>
  );
}
