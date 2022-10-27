import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";

const ref = React.createRef();

const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, description, image, exam, price, rating, totalClass, promotion, id } =
    course;
  console.log(id);

  return (
    <div className="container mt-1">
      
{/* course details header */}
      <header>

        {/* react pdf download functionality */}
      <Pdf targetRef={ref} filename={title}>
          {({ toPdf }) => (

            <button className="btn btn-primary" onClick={toPdf}>
              <p className="fs-5 mb-1">
                Download course Modules 
                <FaDownload className="ms-1"></FaDownload>
              </p>
            </button>

          )}
        </Pdf>


        <h2 className="text-center " ref={ref}>
          {" "}
          Details about <span className="text-info">{title}</span> course{" "}
        </h2>

      <p className=" text-center fw-bold mt-3" >Course Description: {description}</p>
      </header>

{/* course details card */}
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
              <div ref={ref} className="w-75 p-4">
                <h3 className="text-center "> {title}Course Modules </h3>
                <h4>Total Class: {totalClass} </h4>
                <h4>Total Quiz: {exam}</h4>
                <h4>course piece: {price}</h4>
                <h4>Total Student: {rating.count}</h4>
                <h4>course Rating: {rating.rate}</h4>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{promotion}</p>
              <Link to={`/checkout/${id}`} className="btn btn-primary w-100">
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
