import React from "react";
import moment from "moment";

export default function UserProfile({
  name,
  createdAt,
  email,
  lockNow,
  scheduleLock,
  lockDaily,
}) {
  // Math.floor(time /60)

  const lockNowSlice = lockNow.slice(0, 10);
  const lockDailySlice = lockDaily.slice(0, 10);
  const scheduleLockSlice = scheduleLock.slice(0, 10);
  return (
    <div className="row profile-body">
      <div className="mb-4 col-md-4 col-xl-3 left-wrapper">
        <div className="card rounded">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2"></div>

            {/* <img className="profile-pic" src={img} alt="profile" /> */}
            {/* <div className="mt-3">
              <h6 className="profile-name">{name}</h6>
             </div> */}
            <div className="mt-3">
              <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                Name:
              </label>
              <p className="text-muted">{name}</p>
            </div>
            <div className="mt-3">
              <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                Joined:
              </label>
              <p className="text-muted">{moment(createdAt).format("ll")}</p>
            </div>
            <div className="mt-3">
              <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                Email:
              </label>
              <p className="text-muted">{email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-xl-6 middle-wrapper post-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card rounded">
              <div className="card-header">
                {/* <!-- <h6><span className="badge badge-pill badge-light mb-2">Medicine and Surgery, 100 Level, University of Lagos</span></h6> --> */}
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-start">
                    <h6>
                      <span className="badge badge-primary ">
                        Lock Now History
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  {lockNow.length === 0 ? (
                    <p>No Lock Now Yet</p>
                  ) : (
                    lockNowSlice.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            className="d-flex justify-content-between"
                          >
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2"
                              >
                                {" "}
                                Date:
                              </span>{" "}
                              {moment(item.createdAt).format("LLL")}
                            </p>
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                Status:
                              </span>{" "}
                              {item.status}
                            </p>
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                Duration:
                              </span>{" "}
                              {item.duration < 60 ? (
                                <em>{item.duration} min</em>
                              ) : (
                                <em>{Math.floor(item.duration / 60)}hr</em>
                              )}
                            </p>
                          </div>
                          <hr />
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-md-12 grid-margin">
            <div className="card rounded">
              <div className="card-header">
                {/* <!-- <h6><span className="badge badge-pill badge-light mb-2">Medicine and Surgery, 100 Level, University of Lagos</span></h6> --> */}
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-start">
                    <h6>
                      <span className="badge badge-primary ">
                        Lock By Daily Limit History
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  {/* <p className="">Lock By Daily Limit:</p> */}
                  {lockDaily.length === 0 ? (
                    <p>No Lock By Daily Limit Yet</p>
                  ) : (
                    lockDailySlice.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            className="d-flex justify-content-between"
                          >
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                {" "}
                                Date:
                              </span>{" "}
                              {moment(item.createdAt).format("LLL")}
                            </p>
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                Status:
                              </span>{" "}
                              {item.status}
                            </p>
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                Duration:
                              </span>{" "}
                              {item.duration < 60 ? (
                                <em>{item.duration} min</em>
                              ) : (
                                <em>{Math.floor(item.duration / 60)}hr</em>
                              )}
                            </p>
                          </div>
                          <hr />
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 grid-margin">
            <div className="card rounded">
              <div className="card-header">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-start">
                    <h6>
                      <span className="badge badge-primary ">
                        Schedule Lock History
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  {/* <p className="">Schedule Lock:</p> */}
                  {scheduleLock.length === 0 ? (
                    <p>No Schedule Lock yet</p>
                  ) : (
                    scheduleLockSlice.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            className="d-flex justify-content-between"
                          >
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                {" "}
                                Date:
                              </span>{" "}
                              {moment(item.createdAt).format("LLL")}
                            </p>
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                Status:
                              </span>{" "}
                              {item.status}
                            </p>
                            <p className="">
                              <span
                                style={{ fontSize: "15px" }}
                                className="pr-2 "
                              >
                                Duration:
                              </span>{" "}
                              {item.duration < 60 ? (
                                <em>{item.duration} min</em>
                              ) : (
                                <em>{Math.floor(item.duration / 60)}hr</em>
                              )}
                            </p>
                          </div>
                          <hr />
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="col-xl-3 right-wrapper">
        <div className="row flex-grow stats-wrapper">
          <div className="col-md-6 stretch-card">
            <div className="card card-stat card-stat-question">
              <div className="card-body">
                <h6 className="card-title">lock by daily limit</h6>
                <h3 className="">{lockDaily.length}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card card-stat card-stat-article">
              <div className="card-body">
                <h6 className="card-title">Schedule Lock</h6>
                <h3 className="">{scheduleLock.length}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card card-stat card-stat-answer">
              <div className="card-body">
                <h6 className="card-title">Lock Now</h6>
                <h3 className="">{lockNow.length}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
