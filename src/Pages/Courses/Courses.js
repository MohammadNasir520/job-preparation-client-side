import React, { useEffect, useState } from "react";
import CoursesDetails from "../CoursesDetails/CoursesDetails";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  console.log(courses);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-4">
          {

            courses.map(course=>  <LeftSideNav 
                 course={course}
                 key={course.id}
                 ></LeftSideNav>)
          }

         
        </div>
        <div className="col-lg-8">
          <CoursesDetails></CoursesDetails>
        </div>
      </div>
    </div>
  );
};

export default Courses;
