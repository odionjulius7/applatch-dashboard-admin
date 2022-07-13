import React, { useEffect, useState } from "react";
import DashboardChart from "../Components/DashboardChart";
import DashboardTable from "../Components/DashboardTable";
import axios from "../API/axios";
//
import { getUsers } from "../Data";

const NEW_USERS_URL = "/users/stats";

export default function Dashboard() {
  const [newUsers, setNewUsers] = useState([]);
  const [topReferrals, setTopReferrals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchNewUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(NEW_USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      const { data } = response?.data;
      setNewUsers(data.newUsers);
      setTopReferrals(data.topReferrals);
      setIsLoading(false);
      // console.log(topReferrals);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchNewUsers();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
          <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
        </div>
      </div>
      <DashboardChart newUsers={newUsers} isLoading={isLoading} />
      <DashboardTable topReferrals={topReferrals} isLoading={isLoading} />
      <div className="row mt-4"></div>
    </>
  );
}
