import React from "react";

export default function AccountabilityPartner({ accountabilityPartner }) {
  console.log(accountabilityPartner);
  return (
    <div className="row profile-body">
      <div className="col-md-8 col-xl-6 mx-auto middle-wrapper post-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card rounded">
              <div className="card-header">
                <h5 className="my-3">Accountability Partner</h5>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="ml-2">
                      <p
                        style={{ fontSize: "1rem", fontWeight: "700" }}
                        className=""
                      >
                        {accountabilityPartner.name}
                      </p>
                      <p className="tx-16">{accountabilityPartner.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
