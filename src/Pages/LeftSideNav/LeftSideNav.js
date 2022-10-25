import React, { useEffect, useState } from "react";

const LeftSideNav = ({ course }) => {
  console.log(course);

  return (
    <>
     <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">
                 
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
