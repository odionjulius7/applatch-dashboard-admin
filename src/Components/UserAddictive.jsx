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
                {addictive.length < 1 ? (
                  <p>No Addictive Apps Yet</p>
                ) : (
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
                          {/* <img
                          className="img-xs rounded-circle"
                          src={item.icon}
                          alt=""
                        /> */}
                          <h6>
                            <span
                              style={{
                                fontSize: "1.2rem",
                                background: "#d1c8c8",
                                padding: "5px",
                                borderRadius: "5px",
                                marginRight: "8px",
                              }}
                            >
                              Name:
                            </span>{" "}
                            {item.name}
                          </h6>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
