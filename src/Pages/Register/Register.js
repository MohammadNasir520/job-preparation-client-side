import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import "./Register.css"

const Register = () => {
  const [error, setError]=useState([])

    const {createUserByEmailAndPassword}=useContext(AuthContext);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name= form.name.value;
        const photoURL = form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email ,password, photoURL );
        createUserByEmailAndPassword(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
          })
          .catch(error=>{
            console.error(error)
            setError(error.message)
        })
        
    }


    return (
    
    <div className='register-container  mx-auto rounded'>
 <Form onSubmit={handleSubmit} className="  mx-auto  container  mt-5 p-5 ">
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
          <p className='text-danger'>{error}</p>
        </Form.Group>
       
        

        <Button className='w-100' variant="primary" type="submit" >
          
          Submit
        </Button>
        <br />
        <Form.Text className="mx-auto fw-bold text-center">

        Already have an account? Go to  <Link className="text-light " to={'/login'}>Login</Link>
        </Form.Text>


      </Form>
    </div>
        
       
    );
};

export default Register;