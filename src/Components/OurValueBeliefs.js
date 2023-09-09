import { Row, Col } from "react-bootstrap"
import logo from './SIA-logo-min.png'
import { Icon } from '@iconify/react';

function OurValueBeliefs() {
    return (
        <>
            <div className="text-white p-5">
                <h3 style={{color:"#fff"}} className="text-center fw-bold">OUR VALUE AND BELIEFS</h3>
                <h4 className="text-center mb-3">We believe that when we look after people, we look after businesses</h4>
                <Row>
                    <Col lg={3}>
                        <div style={{ height: '250px' }} className="m-2 benifits-container">
                            <div className="d-flex justify-content-center">
                                <Icon className="mb-3" icon="game-icons:progression" color="white" width="34" height="34" />
                            </div>
                            <span style={{ fontSize: '24px' }} className="text-uppercase d-flex justify-content-center mb-2 fw-bold text-white">
                                PROGRESS
                            </span>
                            <p style={{ fontSize: '18px' }} className="text-center text-white">We take pleasure in progress and success.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div style={{ height: '250px' }} className="m-2 benifits-container">
                            <div className="d-flex justify-content-center">
                            <Icon className="mb-3" icon="fa6-solid:rocket" color="white" width="34" height="34" />
                            </div>
                            <span style={{ fontSize: '24px' }} className="text-uppercase d-flex justify-content-center mb-2 fw-bold text-white">RESULTS</span>
                            <p style={{ fontSize: '18px' }} className="text-center text-white">We make positive things happen.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div style={{ height: '250px' }} className="m-2 benifits-container">
                            <div className="d-flex justify-content-center">
                            <Icon className="mb-3" icon="ri:shake-hands-fill" color="white" width="34" height="34" />
                            </div>
                            <span style={{ fontSize: '24px' }} className="text-uppercase d-flex justify-content-center mb-2 fw-bold text-white">PARTNERSHIP</span>
                            <p style={{ fontSize: '18px' }} className="text-center text-white">We believe in partnerships.</p>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div style={{ height: '250px' }} className="m-2 benifits-container">
                            <div className="d-flex justify-content-center">
                            <Icon icon="mdi:lightbulb-on" className="mb-3" color="white" width="34" height="34" />
                            </div>
                            <span style={{ fontSize: '24px' }} className="text-uppercase d-flex justify-content-center mb-2 fw-bold text-white">LEARNING</span>
                            <p style={{ fontSize: '18px' }} className="text-center text-white">We have a passion to learn and excel.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default OurValueBeliefs