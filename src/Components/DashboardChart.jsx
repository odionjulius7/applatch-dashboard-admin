import React from "react";
import MainUsers from "./Charts/MainUsers";
import NewUsers from "./Charts/NewUsers";

export default function DashboardChart() {
  return (
    <div className="row">
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h6 className="card-title mb-0">Main Users</h6>
              <h3 className="mb-4">5,000</h3>
            </div>
            {/* <!-- <p className="text-muted mb-4">Sales are activities related to selling or the number of goods or services sold in a given time period.</p> --> */}
            <div className="monthly-sales-chart-wrapper">
              {/* <canvas id="monthly-student-chart"></canvas> */}
              <MainUsers />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin stretch-card">
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
