import React from 'react';
import CoursesDetails from '../CoursesDetails/CoursesDetails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
       <div className='container'>
         <div className='row '>
            <div className='col-lg-4'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-lg-8'>
                <CoursesDetails></CoursesDetails>
            </div>
        </div>
       </div>
    );
};

export default Courses;