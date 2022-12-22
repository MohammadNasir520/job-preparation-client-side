import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./CheckOut.css"

const CheckOut = () => {
    const checkout=useLoaderData();
    const {title , id, price}=checkout;

   
    console.log(checkout)
    return (
        <div className='premium-text-container mt-5 d-flex align-items-center flex-column justify-content-center' >
            <h2 className='text-center'>Checkout</h2>
            <h6 className='text-center'>Buy the Premium course</h6>

            <h4> <span className='text-info'>{title} </span></h4>

            <h5>Course ID: {id}      <span className='ms-5'> payment: {price} TK</span></h5>


            <p>Start a great Journy with us . Work hard you will definitely be success!</p>
        </div>
    );
};

export default CheckOut;