import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course=useLoaderData();
    const {title}=course;
    console.log(course)
    return (
        <div>
            <h3 className='text-center'>Wellcome to Premium <span className='text-info'>{title} </span> course</h3>
        </div>
    );
};

export default CheckOut;