import { Button, Col, Container, Row } from "react-bootstrap"
import wideservice from './WideService.jpg'
import { Icon } from '@iconify/react';

function WideCoverage() {
    return (
        <>
            <Container>
                <Row className="p-3">
                    <Col lg={6}>
                        <h2 className="text-uppercase fw-bold" style={{ color: '#ff8000' }}>WIDE COVERAGE</h2>
                        <h3 className="fw-bold text-white">Our Services are designed to make a difference within all sectors</h3>
                        <p className="text-white">Our services include cleaning, maintenance, and security Nation wide. We are proud to be delivering across the world in the following industries</p>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="rounded p-3" src="https://media.istockphoto.com/id/1212773703/photo/covid-19-wiping-down-surfaces.jpg?s=612x612&w=0&k=20&c=Yh0hegDBwXXWrzqayCSaWCKmRy_8O7qSiar7TGcLXf8=" width="100%" />
                    
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default WideCoverage