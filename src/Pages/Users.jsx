import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import moment from "moment";

import axios from "../API/axios";

// const AuthContext = createContext({});

const USERS_URL = "/users";

export default function Users() {
  // const { users } = UseAuth();
  // const [formerUsers, setFormerUsers] = useState(getUsers());
  // console.log(users);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(USERS_URL, {
        // headers: { "x-access-token": localStorage.getItem("token") },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      const { data } = response?.data;
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  // console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="d-flex justify-left align-items-center flex-wrap grid-margin">
        <div style={{ marginRight: "20px" }}>
          <h4 className="mb-3 mb-md-0">Users</h4>
        </div>
      </div>

      <div className="row mt-4"></div>
      <div className="row">
        <div className="col-lg-12 col-xl-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h6 className="card-title mb-0">Users</h6>
                <a href="#" className="btn mb-3">
                  &nbsp;
                </a>
              </div>
              {isLoading ? (
                <p>Fetching Users...</p>
              ) : (
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
                        if (item.name === null) {
                          return;
                        }
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                              <Link to={`singleUser/${item.id}`}>
                                {item.name}
                              </Link>
                            </td>
                            <td>{item.email}</td>
                            <td>{moment(item.createdAt).format("ll")}</td>
                            <Outlet />
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
