import React from "react";
import { Link } from "react-router-dom";
import"./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="error-container d-flex justify-content-center  align-items-center" >
      <div className=" ">
        <h1 className="text-danger text-center ">Oops...! You are in wrong route </h1>
        <p className=" text-center ">
          Please go to{" "}
          <span className="fs-4">
            {" "}
            <Link className="text-decoration-none" to="/">Home</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
