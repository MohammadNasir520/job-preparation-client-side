import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import logo from "../../images/job preparation logo.png";
import "./NavBar.css";

const NavBar = () => {


const {user, logOut}=useContext(AuthContext)


const handleLogOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>{
    console.log(error)
  })
}








  return (
    <Navbar bg="light"  expand="lg">
      <Container>
        <Image
          src={logo}
          style={{ width: "40px", height: "40px" }}
          roundedCircle
          className="nav-logo me-2"
        ></Image>
        <Navbar.Brand className="nav-link " to="home">Job Preparation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link " to="/">Home</NavLink>
            <NavLink className="nav-link " to="/courses">Courses</NavLink>
            <NavLink className="nav-link "  to="/">FAQ</NavLink>
            <NavLink className="nav-link " to="/">Blog</NavLink>
         


          </Nav>
          <Nav>

          <Button variant="dark">Dark / light</Button>
            {
              user?.email?
              
              
              <>
              <NavLink  onClick={handleLogOut} className="nav-link " to="login">Logout</NavLink>
              <Image
              src={user?.photoURL}
              style={{width: "40px" , height:"40px"}}
              roundedCircle
              title={user?.displayName}
              className="mx-2"
              ></Image>
              {/* <NavLink  className="nav-link " to="register">{user?.displayName}</NavLink> */}
              </>
              :
              <NavLink  className="nav-link " to="login">Login</NavLink>
            }
            

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
};

export default NavBar;
