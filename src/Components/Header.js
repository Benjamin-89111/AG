import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
// Import Bootstrap CSS files and other necessary imports
import logo from './Agfs.png'

const Header = () => {
  return (
    <Navbar style={{background:"lightgrey"}} expand="lg">
      <div className="container">
        <Navbar.Brand className='me-lg-5' href="#home">
          <img src={logo} width="100px" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-5  justify-content-lg-center">
            <Nav.Link className='fw-bold text-dark ms-lg-5' href="#hero">Home</Nav.Link>
            <Nav.Link className='fw-bold text-dark' href="#about">About</Nav.Link>
            <Nav.Link className='fw-bold text-dark' href="#services">Services</Nav.Link>
            {/* <Nav.Link className='fw-bold text-dark' href="blog.html">Blog</Nav.Link> */}
            <NavDropdown className='fw-bold properties text-dark' title="Properties" id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.1">Dropdown 1</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.2">Dropdown 2</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold text-dark' href="#action/3.3">Dropdown 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button size='md' variant="success" href="#about" className="">
            Enquire Now
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
