import React, { useEffect, useState } from "react";
import MainUsers from "./Charts/MainUsers";
import NewUsers from "./Charts/NewUsers";
import axios from "../API/axios";

const MONTHLY_USERS_URL = "/users/month";

export default function DashboardChart() {
  const [dataMain, setDataMain] = useState([]);

  const fetchUsersMonthly = async () => {
    try {
      const response = await axios.get(MONTHLY_USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      // console.log(response.data);
      const { data } = response?.data;
      const data1 = Object.entries(data).map((item) => {
        // object.entries returns arrays of array, so at each item position you return the index u want
        return {
          name: item[0].slice(0, 3),
          amt: item[1],
        };
      });

      setDataMain(data1);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchUsersMonthly();
  }, []);

  const totalUsers = dataMain.reduce((total, item) => {
    const { amt } = item;
    total += amt;
    return total;
  }, 0);

  // console.log(totalUsers);

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h6 className="card-title mb-0">Main Users In Every Month</h6>
              <h3 className="mb-4">{totalUsers}</h3>
            </div>
            {/* <!-- <p className="text-muted mb-4">Sales are activities related to selling or the number of goods or services sold in a given time period.</p> --> */}
            <div className="monthly-sales-chart-wrapper">
              {/* <canvas id="monthly-student-chart"></canvas> */}
              <MainUsers dataMain={dataMain} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h6 className="card-title mb-0">New Users</h6>
              <h3 className="mb-4">899</h3>
            </div>
            {/* <!-- <p className="text-muted mb-4">Sales are activities related to selling or the number of goods or services sold in a given time period.</p> --> */}
            <div className="monthly-sales-chart-wrapper">
              {/* <canvas id="monthly-sensei-chart"></canvas> */}
              <NewUsers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
