import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import logo from "../../images/job preparation logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [buttonToggle, setToggle] = useState(false);

  const [buttonText , setButtonText]=useState('Make dark')

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggle = () => {
    buttonToggle ?<> {setToggle(false) } {setButtonText('Make Dark')}</> : <>{setToggle(true)} {setButtonText("Make Light")}</>;
    console.log(buttonToggle);
  };

  return (
    <Navbar className="navbar" bg="" expand="lg" sticky="top">
      <Container>
        <Image
          src={logo}
          style={{ width: "40px", height: "40px" }}
          roundedCircle
          className="nav-logo me-2"
        ></Image>
        <Navbar.Brand to="home"><span className="text-light fw-bold">Job Preparation</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/">FAQ</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>

            <div
              className={` toggle-btn ${buttonToggle ? "dark" : "light"}`}
              onClick={handleToggle}
            >
              {buttonText}
            </div>
            {user?.uid ? (
              <>
                <NavLink onClick={handleLogOut} to="login">
                  Logout
                </NavLink>
                {user?.photoURL ? (
                  <Image
                    src={user?.photoURL}
                    style={{ width: "40px", height: "40px" }}
                    roundedCircle
                    title={user?.displayName}
                    className="mx-2"
                  ></Image>
                ) : (
                  <FaUserAlt className="mt-3"></FaUserAlt>
                )}

                {/* <NavLink  to="register">{user?.displayName}</NavLink> */}
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
