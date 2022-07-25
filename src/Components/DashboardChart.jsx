import React, { useEffect, useState, useContext } from "react";
import MainUsers from "./Charts/MainUsers";
import NewUsers from "./Charts/NewUsers";
import axios from "../API/axios";
import DashboardNewUsersTable from "./DashboardNewUsersTable";
import AuthContext from "../context/AuthProvider";

export default function DashboardChart() {
  const { newUsers, isLoading, dataMain } = useContext(AuthContext);

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
      <div className="col-lg-6 col-md-12 grid-margin">
        <div className="monthly-sales-chart-wrapper">
          {/* <canvas id="monthly-sensei-chart"></canvas> */}
          <DashboardNewUsersTable newUsers={newUsers} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
