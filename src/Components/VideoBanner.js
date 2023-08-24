import React from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import banner from './Bg_video.mp4'
const VideoBanner = () => {
  const bannerStyles = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  };

  const videoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentContainerStyles = {
    position: 'relative',
    width: '100%',
    color: 'white',
    padding: '20px',
    zIndex: 1,
  };

  const textStyles = {
    marginBottom: '1rem',
  };

  const h1Styles = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const pStyles = {
    fontSize: '1.5rem',
  };

  return (
    <div className="video-banner " style={bannerStyles}>
      <video autoPlay loop muted playsInline style={videoStyles}>
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" style={overlayStyles}></div>
      <div className="content" style={contentContainerStyles}>
        <Row>
          <Col lg={7} md={12}>
            <div className='p-2 mt-lg-5' style={textStyles}>
              <h2 style={h1Styles}>AG Property and Facility Management. </h2>
              <p style={pStyles}>Welcome to Crystal Facilities Management, we are on a mission to make a positive impact. Trust us for tailor-made solutions for Cleaning, Security, and Maintenance.</p>
              {/* <Button size='lg' className='buttons-ag border-0'>Get Quote</Button> */}
            </div>
          </Col>
          <Col lg={5} md={12}>
            <Card className='home_heroform' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', border: 'none' }}>
              <Card.Body>
                <Card.Title className='text-white' as="h3">Get a Quote</Card.Title>
                <Card.Text className='text-white'>Get in touch, call us on <span className="text-success">9840389051</span> </Card.Text>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label className='text-white'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label className='text-white'>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label className='text-white'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label className='text-white'>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                  </Form.Group>
                  <Button size='lg' className='mt-3 contact-btn border-0' type="submit">
                    Send
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VideoBanner;
