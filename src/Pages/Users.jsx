import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getUsers } from "../Data";

export default function Users() {
  const [users, setUsers] = useState(getUsers());
  // console.log(users);
  return (
    <>
      <div className="d-flex justify-left align-items-center flex-wrap grid-margin">
        <div style={{ marginRight: "20px" }}>
          <h4 className="mb-3 mb-md-0">Users</h4>
        </div>
      </div>

      {/* <!-- row --> */}
      <div className="row mt-4"></div>
      <div className="row">
        <div className="col-lg-12 col-xl-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h6 className="card-title mb-0">Users With Most Referrals</h6>
                <a href="#" className="btn mb-3">
                  &nbsp;
                </a>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th className="pt-0">#</th>
                      <th className="pt-0">NAME</th>
                      <th className="pt-0">Email</th>
                      <th className="pt-0">Reg. Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item, index) => {
                      // console.log(item);
                      return (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>
                            <Link to={`singleUser/${item.id}`}>
                              {item.name}
                            </Link>
                          </td>
                          <td>{item.email}</td>
                          <td>{item.joined}</td>
                          <Outlet />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
