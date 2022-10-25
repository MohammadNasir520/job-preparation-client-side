import React from 'react';
import { Link } from 'react-router-dom';

const CourseContainer = ({course}) => {
    const {title, image, promotion,id}=course;
    return (
        <div>
              <div className="card">
        <img src={image} style={{height: "250px"}} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{promotion}</p>
          <Link to={`/courses/${id}`} className="btn btn-primary w-100">All about {title} course</Link>
        </div>
      </div>
       
        </div>
    );
};

export default CourseContainer;