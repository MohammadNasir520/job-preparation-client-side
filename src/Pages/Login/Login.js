import React, { useContext, useState } from "react";
import {FaGithub, FaGoogle, FaRegSun} from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";
import "./Login.css"

const Login = () => {

  const [error, setError]=useState([])


const navigates=useNavigate()
const location = useLocation();
const froms= location.state?.from?.pathname || "/"
console.log(froms)

const googleProvider= new GoogleAuthProvider()

const {googleSignIn ,  signInbyEmailAndPassword }=useContext(AuthContext)


// get daata from form and sign in by email and password
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log( email, password, );

    signInbyEmailAndPassword(email, password)
    .then(result=>{
      const user= result.user;
      console.log(user);
      form.reset();
      setError('');

     navigates(froms , {replace:true})

    })
    .catch(error=>{
      console.error(error)
      setError(error.message)
    })
}





//   google sign in function handle
const handleGoogleSignIn=()=>{
    googleSignIn(googleProvider)
    .then(result=>{
        const user=result.user;
        console.log(user);

        navigates(froms , {replace:true})
    })
    .catch(error=>{
      setError(error.message)
        console.error(error)
    })
};


  return (

    <div className="login-container mx-auto rounded">
    <div className=" mx-auto  container  mt-5 p-5 ">
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
           <p className='text-danger'>{error}</p>
        </Form.Group>
        

        <Button className="btn-login  w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <div className="mt-4 w-100" >
      <Button onClick={handleGoogleSignIn} className="mb-2 w-100"  variant="outline-light"><FaGoogle></FaGoogle>  Login With Google</Button>
      <Button className=" w-100"  variant="outline-light"><FaGithub></FaGithub>  Login With GitHub</Button>
      </div>

    
<br />
      <Form.Text className="mx-auto fw-bold">

      New to this Website? Please <Link className="text-light text-decoration-none" to={'/register'}>Register</Link>
      </Form.Text>
    </div>
    </div>
  );
};

export default Login;
