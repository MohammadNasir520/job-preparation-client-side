import React from 'react';
import Accordion from "react-bootstrap/Accordion";


const Faq = () => {
    return (
        <div>

            <h1 className='text-center mt-4'> Frequently asked question about our courses</h1>
             <Accordion className="container mt-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> Who are the instructor for the Guided Course? </Accordion.Header>
        <Accordion.Body>
         We are provide service by job speacialist teacher and bcs cadre who who are skilled in this sector for many years 

        </Accordion.Body>
      </Accordion.Item >
      <Accordion.Item eventKey="1" >
        <Accordion.Header className>
          {" "}
          what will be the course duration?
        </Accordion.Header>
        <Accordion.Body>
        Course duration depend on the course type . usually it will be 10 to 12 months.

      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className>
          {" "}
          where will I get course module?
        </Accordion.Header>
        <Accordion.Body>
        click on the corses from header then select a course go t o coursedeatails click on the downlod pdf icon . then corse module will be down loaded

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className>
          {" "}
          Are all the courses available for the mobile and desktop?
        </Accordion.Header>
        <Accordion.Body>
            Yes!...  We make it for mobile and desktop both
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className>
          {" "}
          How can I buy Courses?
        </Accordion.Header>
        <Accordion.Body>
           Click on the get premium button on the course details page . You have to must Login . then payment for the course and we will provide you to this course.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
       
    );
};

export default Faq;