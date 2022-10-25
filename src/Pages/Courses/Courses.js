import React, { useEffect, useState } from "react";
import CourseContainer from "../CourseContainer/CourseContainer";

import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Courses.css"

const Courses = () => {
  const [courses, setCourses] = useState([]);

  console.log(courses);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container  mt-1 courses">

        <div className="row">

    
      <div className=" col-lg-4 ">
       
        <div className=" nav-container "  >
            
          <h6 className="text-center text-light"> Which Courses are available to us</h6>
          {courses.map((course) => (
            <LeftSideNav course={course} key={course.id}></LeftSideNav>
          ))}
        </div>
        

        </div>
        <div className=" col-lg-8 ">
        <div className=" course-container">
          {courses.map((course) => (
            <CourseContainer course={course} key={course.id}></CourseContainer>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Courses;
