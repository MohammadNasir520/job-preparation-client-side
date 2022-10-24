import React, { useContext, useState } from "react";
import {FaGithub, FaGoogle, FaRegSun} from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {

    const [error, setError]=useState('')

const googleProvider= new GoogleAuthProvider()

const {googleSignIn ,createUserByEmailAndPassword }=useContext(AuthContext)


// getting data from login from
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
  };


//   google sign in function handle
const handleGoogleSignIn=()=>{
    googleSignIn(googleProvider)
    .then(result=>{
        const user=result.user;
        console.log(user);
    })
    .catch(error=>{
        setError(error)
        console.error(error)
    })
};











  return (
    <div className="w-50 mx-auto ">
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
          <p className="text-danger">{error}</p>
        </Form.Group>
        

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <ButtonGroup  className="mt-4" vertical>
      <Button onClick={handleGoogleSignIn} className="mb-2"  variant="outline-primary"><FaGoogle></FaGoogle>  Login With Google</Button>
      <Button  variant="outline-dark"><FaGithub></FaGithub>  Login With GitHub</Button>
      </ButtonGroup>

    
<br />
      <Form.Text id="passwordHelpBlock" muted>
       New to this Website? Please <Link to={'/register'}>Register</Link>
      </Form.Text>
    </div>
  );
};

export default Login;
