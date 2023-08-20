import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {React, useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Images/practical_logo (1).png";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const [scroll, setScroll] = useState("container-head");
  const listenScrollEvent = () => {
    if (window.scrollY) {
      setScroll("menu_fixed")
    } else {
      setScroll("container-head")
    }
  }
  window.addEventListener("scroll",listenScrollEvent)
  return (
    // <div className="head-bg">
      <Navbar className="navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll" collapseOnSelect expand="lg">
        <Container className={scroll}>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" style={{height:"4rem"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="/home" className="list-item text-decoration-none">
                Home
              </Link>
              <div class="dropdown"><Link to="/" className="list-item text-decoration-none dropbtn">
                About <i aria-hidden="true" class="fas fa-caret-down"></i>
              </Link>
              <div class="dropdown-content">
                <a href="/about">Meet provider</a>
                <a href="/about">Meet Doctor</a>
                <a href="/about">Facilities</a>
              </div>
              </div>
              <div class="dropdown">
              <Link
                to="/"
                className="list-item text-decoration-none dropbtn"
              >
                Service <i aria-hidden="true" class="fas fa-caret-down"></i>
              </Link>
              <div class="dropdown-content">
                <a href="/service">Virtual Visit</a>
              </div>
              </div>
              <Link to="/" className="list-item text-decoration-none">
                Contact US
              </Link>
              <Link to="/">
                <button className="list-item text-decoration-none theme-btn btn-fill" style={{borderRadius: "40px"}}>Book Appoinment</button>
              </Link>
              {/* {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </div>
  );
};

export default Header;
