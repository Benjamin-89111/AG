import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
// Import Bootstrap CSS files and other necessary imports
import logo from './FinalLogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='service-bg' expand="lg">
      <div className="container">
        <Navbar.Brand className='me-lg-5'>
          <Link to="/">
            <img src={logo} width="170px" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-5  justify-content-lg-center">
            <Nav.Link className='fw-bold menu-opt text-white ms-lg-5' >
              {/* <Link to="/">
                <span className='text-white'>Home</span>
              </Link> */}
            </Nav.Link>
            <Nav.Link className='fw-bold menu-opt text-white'>
              <Link to="/about">
                <span className='text-white'>About</span>
              </Link>
            </Nav.Link>
            <NavDropdown className='fw-bold properties text-white' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.1">Commercial Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.2">Building Maintenance</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.3">Man-Power</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.2">Facility Management</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.3">Maintenance</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.3">Cleaning</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='fw-bold text-white' href="blog.html">Blog</Nav.Link> */}
            <NavDropdown className='fw-bold properties text-white' title="Properties" id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.1">Property Management</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.2">Warm Shell Spaces</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.3">Office Spaces</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.2">Large Office Spaces</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.3">Event Spaces</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button size='md' style={{ background: "#ff8000" }} href="#about" className="border-0">
            Enquire Now
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar >
  );
};

export default Header;
