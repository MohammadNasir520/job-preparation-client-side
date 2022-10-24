import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const Register = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name= form.name.value;
        const photoURL = form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email ,password, photoURL )
    }


    return (
        
        <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your Name" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Phot URL" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
          <p className='text-danger'>error</p>
        </Form.Group>
       
        

        <Button variant="primary" type="submit" >
          
          Submit
        </Button>
      </Form>
    );
};

export default Register;