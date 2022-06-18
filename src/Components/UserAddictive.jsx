// import React from "react";

export default function UserAddictive({ addictive }) {
  // console.log(addictive?.map((item) => item));
  return (
    <div className="row profile-body">
      <div className="col-md-8 col-xl-6 mx-auto middle-wrapper post-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card rounded">
              <div className="card-header">
                <h6>
                  <span
                    style={{ fontSize: "1rem" }}
                    className="badge badge-pill badge-light mb-2"
                  >
                    Users Addictive Apps
                  </span>
                </h6>
                <div
                  style={{ flexDirection: "column", textAlign: "left" }}
                  // className="d-flex align-items-center justify-content-between"
                  className="d-flex m-3"
                >
                  {addictive?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex align-items-center m-2"
                      >
                        <img
                          className="img-xs rounded-circle"
                          src={item.logo}
                          alt=""
                        />
                        <h6>
                          <span
                            style={{
                              backgroundColor: "#c3d1c9",
                              fontSize: "1rem",
                              color: "#304e30",
                            }}
                            className="badge mt-2 ml-4 py-1 px-3"
                          >
                            {item.appName}
                          </span>
                        </h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
