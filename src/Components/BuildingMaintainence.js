import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function BuildingMaintainence() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="p-3 section-2 text-white">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Building Maintainence</h1>
                            <Col lg={6} className="p-4">
                                <img src={bm1} width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}}>Introduction :</h2>
                                <p>
                                    AG Property & Facility is a reputable name in the realm of building maintenance services, committed to providing comprehensive solutions that ensure the longevity, safety, and functionality of diverse properties. With a strong focus on expertise, reliability, and customer satisfaction, AG Property & Facility has emerged as a preferred partner for maintaining and enhancing the value of properties across various sectors.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#ff8000"}} className="text-center">Key Features:</h2>
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Skilled Professionals:</strong> AG Property & Facility boasts a team of qualified professionals skilled in various aspects of building maintenance, guaranteeing top-notch services.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Solutions:</strong> Recognizing that every property has unique requirements, the company offers customized maintenance plans designed to address specific needs and challenges.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Proactive Approach:</strong> With a proactive mindset, AG Property & Facility focuses on preventive maintenance to identify and rectify issues before they escalate, saving clients time and money.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Emergency Response:</strong> The company understands that emergencies can arise at any time. Their 24/7 emergency response team is always prepared to address urgent maintenance requirements.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Technology Integration:</strong> AG Property & Facility stays updated with the latest trends and technologies in building maintenance, integrating advanced tools to streamline operations and enhance outcomes.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Transparent Communication:</strong> Clear and open communication is a cornerstone of their service. Clients are kept informed about maintenance schedules, progress, and any potential challenges.</li>
                                </ol>
                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src={bm} className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}} className="text-start">Conclusion</h2>
                                <p>
                                    AG Property & Facility stands as a trusted partner in the realm of building maintenance services, dedicated to ensuring the optimal performance, safety, and value of properties. Through their expertise, commitment to excellence, and customer-centric approach, they have established themselves as leaders in the industry, providing tailored solutions that meet the diverse needs of property owners and managers.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default BuildingMaintainence