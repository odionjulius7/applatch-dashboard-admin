import React from "react";

export default function UserProfile({
  name,
  img,
  joined,
  email,
  number,
  numberOfLockNow,
  NumOfSchedule,
  numOfLockByDailyLImit,
}) {
  return (
    <div className="row profile-body">
      <div className="mb-4 col-md-4 col-xl-3 left-wrapper">
        <div className="card rounded">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2"></div>

            <img className="profile-pic" src={img} alt="profile" />
            <div className="mt-3">
              <h6 className="profile-name">{name}</h6>
              {/* <!-- <p className="text-muted mt-2">Hi! I'm a Medical Student at Unilag. I hope to and learn from the interactions on this app.</p> -->
                                        <!-- <a href="#" className="btn btn-primary btn-icon-text mt-3" onclick="showSwal('verify-sensei')"><i data-feather="check-circle" className="btn-icon-prepend"></i>Verify as Sensei</a> --> */}
            </div>
            <div className="mt-3">
              <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                Joined:
              </label>
              <p className="text-muted">{joined}</p>
            </div>
            <div className="mt-3">
              <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                Email:
              </label>
              <p className="text-muted">{email}</p>
            </div>
            <div className="mt-3">
              <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                Phone Number:
              </label>
              <p className="text-muted">{number}</p>
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
                      <span className="badge badge-primary ">Lock History</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="">
                  Consectetur adipisicing elit accusamus minima delectus nemo
                  unde quae...
                </p>
                <p className="">
                  Consectetur adipisicing elit accusamus minima delectus nemo
                  unde quae...
                </p>
                <p className="">
                  Consectetur adipisicing elit accusamus minima delectus nemo
                  unde quae...{" "}
                  <a className="read-more" href="javasvript:;">
                    See More
                  </a>
                </p>

                {/* <!-- <img className="img-fluid" src="./assets/images/sample1.jpg" alt=""> --> */}
              </div>
              <div className="card-footer">
                <div className="d-flex post-actions">
                  <span className="d-flex align-items-center text-muted mr-4">
                    <i className="icon-md" data-feather="thumbs-up"></i>
                    <p className="ml-2">1</p>
                  </span>
                  <span className="d-flex align-items-center text-muted mr-4">
                    <i className="icon-md" data-feather="thumbs-down"></i>
                    <p className="ml-2">0</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 right-wrapper">
        <div className="row flex-grow stats-wrapper">
          <div className="col-md-6 stretch-card">
            <div className="card card-stat card-stat-question">
              <div className="card-body">
                <h6 className="card-title">lock by daily limit</h6>
                <h3 className="">{numOfLockByDailyLImit}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card card-stat card-stat-article">
              <div className="card-body">
                <h6 className="card-title">Schedule Lock</h6>
                <h3 className="">{NumOfSchedule}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card card-stat card-stat-answer">
              <div className="card-body">
                <h6 className="card-title">Lock Now</h6>
                <h3 className="">{numberOfLockNow}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
