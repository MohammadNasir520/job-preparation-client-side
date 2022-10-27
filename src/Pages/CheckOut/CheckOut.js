import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./CheckOut.css"

const CheckOut = () => {
    const course=useLoaderData();
    const {title}=course;
    console.log(course)
    return (
        <div className='premium-text-container mt-5 d-flex align-items-center flex-column justify-content-center' >
            <h3 className='text-center'>Wellcome to Premium <span className='text-info'>{title} </span> course</h3>
            <p>Start a great Journy with us . Work hard you will definitely be success!</p>
        </div>
    );
};

export default CheckOut;