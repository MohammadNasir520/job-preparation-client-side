import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {



const course=useLoaderData()
const {title, description}=course;
console.log(course)


    return (
      
       
      <div className='container'>
      
      <h2 className='text-center '>Take preparation for {title}</h2>
      </div>
    );
};

export default CoursesDetails;