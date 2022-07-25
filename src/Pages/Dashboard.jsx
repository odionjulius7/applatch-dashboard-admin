import React from "react";
import DashboardChart from "../Components/DashboardChart";
import DashboardTable from "../Components/DashboardTable";
//
// import { getUsers } from "../Data";

export default function Dashboard() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
          <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
        </div>
      </div>
      <DashboardChart />
      <DashboardTable />
      <div className="row mt-4"></div>
    </>
  );
}
