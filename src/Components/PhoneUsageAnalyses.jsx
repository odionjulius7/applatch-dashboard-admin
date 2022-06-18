import React from "react";
import PeakScreenTime from "./Charts/PeakScreenTime";
import TodaysFocusTime from "./Charts/TodaysFocusTime";
import UserAverageScreenTime from "./Charts/UserAverageScreenTime";

export default function PhoneUsageAnalyses() {
  return (
    <div className="row profile-body">
      <div className="col-md-8 col-xl-6 mx-auto middle-wrapper post-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card rounded">
              <div className="card-header">
                {/* <div className="d-flex align-items-center justify-content-between"> */}
                <UserAverageScreenTime />
                {/* </div> */}
                {/* <PeakScreenTime /> */}
              </div>
            </div>

            <div className="card rounded mt-3">
              <div className="card-header">
                {/* <div className="d-flex align-items-center justify-content-between">
                  <UserAverageScreenTime />
                </div> */}
                <PeakScreenTime />
              </div>
            </div>
            <div className="card rounded mt-3">
              <div className="card-header">
                {/* <div className="d-flex align-items-center justify-content-between">
                  <UserAverageScreenTime />
                </div> */}
                <TodaysFocusTime />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
