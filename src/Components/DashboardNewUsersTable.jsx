import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import moment from "moment";

import "../Components/componentStyles/DashboardNewUsers.css";

export default function DashboardNewUsersTable({ newUsers, isLoading }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(newUsers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(newUsers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, newUsers]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newUsers.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="row">
      <div className="col-lg-12 col-xl-12 stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-1">
              <h6 className="card-title mb-0">New Users</h6>
              <a href="#" className="btn mb-1">
                &nbsp;
              </a>
            </div>
            {isLoading ? (
              <p>No New User Yet!</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th className="pt-0">#</th>
                      <th className="pt-0">Name</th>
                      <th className="pt-0">Email</th>
                      <th className="pt-0">Reg. Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems === 0 ? (
                      <p>No New Users</p>
                    ) : (
                      currentItems?.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                              <Link to={`/${item.id}`}>
                                {item.name === null
                                  ? item.email.slice(
                                      0,
                                      item["email"].length - 10
                                    )
                                  : item.name}
                              </Link>
                            </td>
                            <td>{item.email}</td>
                            <td>{moment(item.createdAt).format("ll")}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            )}
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              // styling the whole btns, note: always know when to use thw class with link a tags and without for just li tags
              containerClassName="pagination1"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
