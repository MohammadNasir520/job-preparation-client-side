import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, description, image, exam, rating, totalClass, promotion } =
    course;
  console.log(course);

  return (
    <div className="container mt-1">
      <header>
        <h2 className="text-center ">
          {" "}
          Details about <span className="text-info">{title}</span> course{" "}
        </h2>
        <p className="fs-5 mb-1">
            Download PDF 
          <FaDownload ></FaDownload>
        </p>
        <p>Course Description: {description}</p>
      </header>

      <section>
        <div className="mt-3">
          <div className="card">
            <div className="d-lg-flex w-100  ">
              <div className="w-auto">
                <img
                  src={image}
                  style={{ height: "290px" }}
                  className="card-img-top img-fluid "
                  alt="..."
                />
              </div>
              <div className="w-75 p-4">
                <h3 className="text-center ">Course Details </h3>
                <h4>Total Class: {totalClass} </h4>
                <h4>Total Quiz: {exam}</h4>
                <h4>Total Student: {rating.count}</h4>
                <h4>course Rating: {rating.rate}</h4>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{promotion}</p>
              <Link to="/checkout" className="btn btn-primary w-100">
                Get Premium Access for {title} course
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesDetails;
