import React, { useRef } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import banner from './contact.mp4'
import Footer from './Footer';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'


const EnquireNow = () => {

    // 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eq1afuh', 'template_2qfd1nd', form.current, 'bOlXJsL30Rrl49hms')
            .then((result) => {
                console.log(result.text);
                toast.success('Your Request Has Been Submitted');
            }, (error) => {
                console.log(error.text);
                toast.error('Error submitting request. Please try again.');
            });
    };

    // 



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
        <>
            <Row>
                <Col lg={12} className='mb-5'>
                    <Header />
                </Col>
                <Col lg={12} className='mt-4'>
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
                                        <h2 style={h1Styles}>Contact Us</h2>
                                        <p style={pStyles}>
                                            Call us today for a quick consultation and to receive a free non obligation quote from our expert team on hand 24/7.
                                        </p>
                                        {/* <Button size='lg' className='buttons-ag border-0'>Get Quote</Button> */}
                                    </div>
                                </Col>
                                <Col lg={5} md={12}>
                                    <Card className='home_heroform' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', border: 'none' }}>
                                        <Card.Body>
                                            <Card.Title className='text-white' as="h3">Get in Touch</Card.Title>
                                            <Card.Text className='text-white'>Get in touch, call us on <span style={{ color: "#ff8000", fontWeight: "bold", fontSize: "24px" }}>7845800982</span> </Card.Text>
                                            <Form ref={form} onSubmit={sendEmail}>
                                                <Form.Group className='mb-3' controlId="name">
                                                    <Form.Label className='text-white'>Name</Form.Label>
                                                    <Form.Control required type="text" name="user_name" placeholder="Enter your name" />
                                                </Form.Group>
                                                <Form.Group controlId="phone" className='mb-3'>
                                                    <Form.Label className='text-white'>Phone</Form.Label>
                                                    <Form.Control required type="text" name="user_contact" placeholder="Enter your phone number" />
                                                </Form.Group>
                                                <Form.Group controlId="email" className='mb-3'>
                                                    <Form.Label className='text-white'>Email</Form.Label>
                                                    <Form.Control required type="email" name="user_email" placeholder="Enter your email" />
                                                </Form.Group>
                                                <Form.Group controlId="message" className='mb-3'>
                                                    <Form.Label className='text-white'>Message</Form.Label>
                                                    <Form.Control required as="textarea" name="message" rows={3} placeholder="Enter your message" />
                                                </Form.Group>
                                                <Button size='md' className='mt-3 enq contact-btn border-0' type="submit">
                                                    Send
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <ToastContainer />
                    </div>

                </Col>

                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    );
};

export default EnquireNow;
