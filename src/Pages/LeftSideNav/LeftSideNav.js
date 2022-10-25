import React, { useEffect, useState } from "react";

const LeftSideNav = ({ course }) => {
  console.log(course);

  return (
    <>
      <h6 className="text-center"> Which Courses are available to us</h6>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={course.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
