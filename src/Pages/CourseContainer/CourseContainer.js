import React from 'react';
import { Link } from 'react-router-dom';

const CourseContainer = ({course}) => {
    const {title, image, promotion}=course;
    return (
        <div>
              <div class="card">
        <img src={image} style={{height: "250px"}} class="card-img-top img-fluid" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{promotion}</p>
          <Link href="#" class="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
       
        </div>
    );
};

export default CourseContainer;