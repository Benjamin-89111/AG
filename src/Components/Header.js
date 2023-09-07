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
    <Navbar className='service-bg' fixed='top' expand="lg">
      <div className="container">
        <Navbar.Brand className='me-lg-5'>
          <Link to="/">
            <img src={logo} width="170px" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-5  justify-content-lg-center">
            <Nav.Link className='fw-light menu-opt text-white  ' >
              {/* <Link to="/">
                <span className='text-white'>Home</span>
              </Link> */}
            </Nav.Link>
            <Nav.Link className='fw-light menu-opt text-white'>
              <Link to="/about">
                <span className='text-white ms-3 ag-head'>About</span>
              </Link>
            </Nav.Link>
            <NavDropdown className='fw-light  ms-3 properties text-white' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Property-Management" className='text-dark' >Property Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Commercial-Cleaning" className='text-dark' >Commercial Cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Building-Maintainence" className='text-dark' >Building Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Facility-Management" className='text-dark' >Facility Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Maintainence" className='text-dark' >Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Cleaning" className='text-dark' >Cleaning</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='fw-light text-white' href="blog.html">Blog</Nav.Link> */}
            <NavDropdown
              className='fw-light properties ms-3 text-white'
              title="Properties"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/Residential-Spaces" className='text-dark'>
                Residential
              </NavDropdown.Item>
              <NavDropdown
                title="Commercial"
                id="residential-dropdown"
                className='ms-3 ms-lg-2'
              >
                {/* Add sub-menu items here */}
               
                <NavDropdown.Item as={Link} to="/Warm-Shell-Spaces" className='text-dark'>
                  Warm Shell Spaces
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Office-Spaces" className='text-dark'>
                  Office Spaces
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Large-Office-Spaces" className='text-dark'>
                  Large Office Spaces
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Event-Spaces" className='text-dark'>
                  Event Spaces
                </NavDropdown.Item>
              </NavDropdown>

            </NavDropdown>

            <Nav.Link className='fw-light menu-opt text-white'>
              <Link to="/Man-Power">
                <span className='text-white ag-head ms-3 '>Man Power</span>
              </Link>
            </Nav.Link>
          </Nav>

          <Button as={Link} to="/Enquire" size='md' style={{ background: "#ff8000" }}  className="border-0 enq fw-light mb-3 mb-lg-0">
            Enquire Now
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar >
  );
};

export default Header;
