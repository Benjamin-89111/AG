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
              {/* <a  as={Link} to="/">
                <span className='text-white'>Home</span>
              </Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className='fw-light menu-opt text-white'>
              {/* <a  as={Link} to="/about"> */}
              <span className='text-white ms-3 ag-head'>About</span>
              {/* </a> */}
            </Nav.Link>
            <NavDropdown className='fw-light  ms-3 properties text-white' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Property-Management' className='text-dark' >Property Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Facility-Management" className='text-dark' >Facility Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Maintainence" className='text-dark' >Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Cleaning" className='text-dark' >Cleaning</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='fw-light properties ms-3 text-white'
              title="Properties"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/Residential" className='text-dark'>
                Residential
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Commercial" className='text-dark'>
                Commercial
              </NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link as={Link} to="/Man-Power" className='fw-light menu-opt text-white'>
              {/* <a > */}
              <span className='text-white ag-head ms-3 '>Man Power</span>
              {/* </a> */}
            </Nav.Link>
          </Nav>

          <Button as={Link} to="/Enquire" size='md' style={{ background: "#ff8000" }} className="border-0 enq fw-light mb-3 mb-lg-0">
            Enquire Now
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar >
  );
};

export default Header;
