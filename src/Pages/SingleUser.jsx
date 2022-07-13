import React, { useState, useEffect } from "react";
import AccountabilityPartner from "../Components/AccountabilityPartner";
import PhoneUsageAnalyses from "../Components/PhoneUsageAnalyses";
import UserAddictive from "../Components/UserAddictive";
import UserProfile from "../Components/UserProfile";
import axios from "../API/axios";
//
// import axios from "axios";
import { FiColumns, FiHeart, FiMessageSquare } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";

import { useParams } from "react-router-dom";

const USER_DETAILS_ID = "/user";
const LOCK_NOW_HISTORY = "/lockhistory";
const LOCK_DAILY_HISTORY = "/lockdailyhistory";
const SCHEDULE_LOCK_HISTORY = "/schedulelockhistory";
const USER_LOCK_HISTORY = "/history";

export default function SingleUser() {
  const [profile, setProfile] = useState(true);
  const [addictive, setAddictive] = useState(false);
  const [accountability, setAccountability] = useState(false);
  const [analyses, setAnalyses] = useState(false);
  //

  //
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [lockNow, setLockNow] = useState([]);
  const [lockDaily, setLockDaily] = useState([]);
  const [scheduleLock, setScheduleLock] = useState([]);
  // const [userLockHistory, setUserLockHistory] = useState([]);

  const fetchUserById = async () => {
    try {
      const response = await axios.get(`${USER_DETAILS_ID}/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      // console.log(response.data);
      const { data } = response?.data;
      setUser(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const lockedNowHistory = async () => {
    try {
      const response = await axios.get(`${LOCK_NOW_HISTORY}/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      const { data } = response?.data;

      setLockNow(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const lockDailyHistory = async () => {
    try {
      const response = await axios.get(`${LOCK_DAILY_HISTORY}/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      const { data } = response?.data;
      // console.log(data);
      setLockDaily(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const scheduleLockHistory = async () => {
    try {
      const response = await axios.get(`${SCHEDULE_LOCK_HISTORY}/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      const { data } = response?.data;
      // console.log(data);
      setScheduleLock(data);
    } catch (err) {
      console.log(err.response);
    }
  };
  //

  // const fetchUserLockHistory = async () => {
  //   try {
  //     const response = await axios.get(`${SCHEDULE_LOCK_HISTORY}/${userId}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
  //       },
  //     });
  //     // const { data } = response?.data;
  //     console.log(response);
  //     // setUserLockHistory(data);
  //   } catch (err) {
  //     console.log(err.response);
  //   }
  // };

  //

  useEffect(() => {
    fetchUserById();
    lockedNowHistory();
    lockDailyHistory();
    scheduleLockHistory();
    // fetchUserLockHistory();
  }, [userId]);

  // useEffect(() => {
  //   localStorage.setItem("profile", JSON.stringify(profile));
  //   localStorage.setItem("addictive", JSON.stringify(addictive));
  //   localStorage.setItem("accountability", JSON.stringify(accountability));
  //   localStorage.setItem("analyses", JSON.stringify(analyses));
  // }, [profile, addictive, accountability, analyses]);

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
      {profile && (
        <UserProfile
          scheduleLock={scheduleLock}
          lockDaily={lockDaily}
          lockNow={lockNow}
          {...user}
        />
      )}
      {addictive && <UserAddictive {...user} />}
      {accountability && <AccountabilityPartner {...user} />}
      {analyses && <PhoneUsageAnalyses />}
    </div>
  );
}
