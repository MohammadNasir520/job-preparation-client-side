import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {



const course=useLoaderData()
const {title, description,image,exam,rating,totalClass}=course;
console.log(course)


    return (
      
       
      <div className='container mt-4'>
      
      {/* <h2 className='text-center '>Take preparation for {title}</h2> */}
      <h2 className='text-center '> Details about <span className='text-info'>{title}</span> course</h2>


      <div className='mt-3'>
              <div className="card">
               <div className='d-lg-flex w-100  '>
               <div className='w-auto'>
                <img src={image} style={{height: "300px"}} className="card-img-top img-fluid " alt="..."/>

                </div>
                <div className='w-75 p-4'>
                    <h1 className='text-center'>course details </h1>
                    <h4>Total Class:  {totalClass} </h4>
                    <h4>Total Quiz:         {exam}</h4>
                    <h4>Total Student:  {rating.count}</h4>
                    <h4>course Rating: {rating.rate}</h4>
                </div>
               </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={``} className="btn btn-primary w-100">All about {title} course</Link>
        </div>
      </div>
       
        </div>


      </div>
    );
};

export default CoursesDetails;