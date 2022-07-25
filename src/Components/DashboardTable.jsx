import React, { useState, useEffect, useContext } from "react";
// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import moment from "moment";
import AuthContext from "../context/AuthProvider";

export default function DashboardTable() {
  const { topReferrals, isLoading } = useContext(AuthContext);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(topReferrals.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(topReferrals.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, topReferrals]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % topReferrals.length;
  //   setItemOffset(newOffset);
  // };

  return (
    <div className="row mt-3">
      <div className="col-lg-12 col-xl-12 stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h6 className="card-title mb-0">Users With Most Referrals</h6>
              <a href="#" className="btn mb-3">
                &nbsp;
              </a>
            </div>
            {isLoading ? (
              <p>Referrals Loading...</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th className="pt-0">#</th>
                      <th className="pt-0">Name</th>
                      <th className="pt-0">Email</th>
                      <th className="pt-0">Reg. Date</th>
                      <th className="pt-0">Num. Of Referrals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems?.map((item, index) => {
                      if (item.referral_num < 1) return;

                      return (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>
                            <Link to={`/${item.id}`}>
                              {item.name === null
                                ? item.email.slice(0, item["email"].length - 10)
                                : item.name}
                            </Link>
                          </td>
                          <td>{item.email}</td>
                          <td>{moment(item.createdAt).format("ll")}</td>
                          <td className="pl-5">{item.referral_num}</td>
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
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        // styling the whole btns, note: always know when to use thw class with link a tags and without for just li tags
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      /> */}
    </div>
  );
}
