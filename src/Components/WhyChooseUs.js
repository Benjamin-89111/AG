import { Button, Col, Container, Row } from "react-bootstrap"
import wideservice from './WideService.jpg'
import { Icon } from '@iconify/react';

function WideCoverage() {

    const sectionStyles = {
        backgroundImage: 'url("")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        backgroundImage: "linear-gradient(150deg,#005389 0%,#258B41 100%)",
        opacity: '.8',
        padding: '50px 0',
        color: 'white',
    };

    return (
        <>
            <div>
                <Container>
                    <Row className="p-4 text-white">
                        <Col lg={6} className="p-2">
                            <h3 style={{color:"#fff"}} className="text-uppercase fw-bold mb-4">Why Choose Us ?</h3>
                            <img className="rounded" src="https://media.istockphoto.com/id/1418278677/photo/school-janitors-in-the-classroom.jpg?s=612x612&w=0&k=20&c=md9mjFrDEQKK1iSZLtRE7rHG9ZjGMarJ3pxjd7bcm1w=" width="100%" />
                        </Col>
                        <Col lg={6} className="text-white">
                            <p className="ms-3 mt-3" >
                                AG Property & Facilities Management understands the difficulties of maintaining a building operational. We take pride in having the expertise, knowledge, and commitment to provide you with the services you demand.
                            </p>
                            <ul className="" type="none">
                                <li><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />When you choose us, AG Property & Facilities Management, you are choosing reliability and peace of mind.</li>
                                <li><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Our goal is to provide comprehensive facility management solutions. Our team's distinct talents will help us to go above and beyond your expectations.</li>
                                <li><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />We care about you and your needs; you will receive a Facilities Management package that you can be proud of.</li>
                                <li><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Our passion and expertise help us to deliver high-quality facility services such as commercial and office cleaning, security, student accommodation services, front-of-house solutions, and more.</li>
                                <li><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />We want you to know that your building is in safe hands, so that you can focus on your responsibilities.</li>
                                <li><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Our team will focus on providing the best service possible and enhancing your Facilities Management package from day one.</li>
                            </ul>
                            <p className="ms-3">We would love to hear from you on how we can help you improve quality, consistency and save costs</p>
                            {/* <Button size="lg" className="contact-btn border-0 ms-3">Get to Know More</Button> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default WideCoverage