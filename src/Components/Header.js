import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from './FinalLogo.png'

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
              {/* <a target="_blank " as={Link} to="/">
                <span className='text-white'>Home</span>
              </Link> */}
            </Nav.Link>
            <Nav.Link target="_blank " as={Link} to='/about' className='fw-light menu-opt text-white'>
              {/* <a target="_blank " as={Link} to="/about"> */}
                <span className='text-white ms-3 ag-head'>About</span>
              {/* </a> */}
            </Nav.Link>
            <NavDropdown className='fw-light  ms-3 properties text-white' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank " as={Link} to='/Property-Management' className='text-dark' >Property Management</NavDropdown.Item>
              <NavDropdown.Item  target="_blank " as={Link} to="/Commercial-Cleaning" className='text-dark' >Commercial Cleaning</NavDropdown.Item>
              <NavDropdown.Item  target="_blank " as={Link} to="/Building-Maintainence" className='text-dark' >Building Maintenance</NavDropdown.Item>
              <NavDropdown.Item  target="_blank " as={Link} to="/Facility-Management" className='text-dark' >Facility Management</NavDropdown.Item>
              <NavDropdown.Item  target="_blank " as={Link} to="/Maintainence" className='text-dark' >Maintenance</NavDropdown.Item>
              <NavDropdown.Item  target="_blank " as={Link} to="/Cleaning" className='text-dark' >Cleaning</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='fw-light text-white' target="_blank " as={Link} to="blog.html">Blog</Nav.Link> */}
            <NavDropdown
              className='fw-light properties ms-3 text-white'
              title="Properties"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item  target="_blank " as={Link} to="/Residential" className='text-dark'>
                Residential
              </NavDropdown.Item>
              <NavDropdown
                title="Commercial"
                id="residential-dropdown"
                className='ms-3 ms-lg-2'
              >
                {/* Add sub-menu items here */}
               
                <NavDropdown.Item  target="_blank " as={Link} to="/Warm-Shell" className='text-dark'>
                  Warm Shell
                </NavDropdown.Item>
                <NavDropdown.Item  target="_blank " as={Link} to="/Office" className='text-dark'>
                  Office
                </NavDropdown.Item>
                <NavDropdown.Item  target="_blank " as={Link} to="/Large-Office" className='text-dark'>
                  Large Office
                </NavDropdown.Item>
                <NavDropdown.Item  target="_blank " as={Link} to="/Event" className='text-dark'>
                  Event
                </NavDropdown.Item>
              </NavDropdown>

            </NavDropdown>

            <Nav.Link target="_blank " as={Link} to="/Man-Power" className='fw-light menu-opt text-white'>
              {/* <a > */}
                <span className='text-white ag-head ms-3 '>Man Power</span>
              {/* </a> */}
            </Nav.Link>
          </Nav>

          <Button  target="_blank " as={Link} to="/Enquire" size='md' style={{ background: "#ff8000" }}  className="border-0 enq fw-light mb-3 mb-lg-0">
            Enquire Now
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar >
  );
};

export default Header;
