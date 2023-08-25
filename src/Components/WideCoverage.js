import { Button, Col, Container, Row } from "react-bootstrap"
import wideservice from './WideService.jpg'
import { Icon } from '@iconify/react';

function WideCoverage() {
    return (
        <>
            <Container>
                <Row className="p-5">
                    <Col lg={6}>
                        <h2 className="text-uppercase fw-bold" style={{ color: '#258b41' }}>WIDE COVERAGE</h2>
                        <h3 className="fw-bold text-white">Our Services are designed to make a difference within all sectors</h3>
                        <p className="text-white">Our services include cleaning, maintenance, and security Nation wide. We are proud to be delivering across the world in the following industries</p>
                        <img className="rounded mb-3" src="https://media.istockphoto.com/id/1212773703/photo/covid-19-wiping-down-surfaces.jpg?s=612x612&w=0&k=20&c=Yh0hegDBwXXWrzqayCSaWCKmRy_8O7qSiar7TGcLXf8=" width="100%" />
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <ul type="none" className="mt-lg-5 mt-sm-0 mt-md-0 ms-lg-5 ms-sm-0 ms-md-0">
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Student Accommodation
</li>
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Universities & Colleges</li>
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Schools</li>
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Healthcare</li>
                                {/* <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Offices</li>
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Construction Sites
                                </li>
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Retail</li>
                                <li className="fw-semibold"><Icon icon="mdi:tick" color="#5FBE4C" className="me-2" width="28" height="28" />Warehouses</li>
                                <span style={{ fontSize: '16px' }} className="d-block mb-3 mt-2">We would love to hear from you on how we can help you improve quality, consistency and save costs</span>
                                <Button size="lg" className="contact-btn border-0">Contact Us</Button> */}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default WideCoverage