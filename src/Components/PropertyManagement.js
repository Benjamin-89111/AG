import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function PropertyManagement() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="p-5 section-3">
                    <Container>
                        <Row>
                            <h1 className="text-center mb-3">Property Management</h1>
                            <Col lg={6} className="p-4">
                                <img src="https://imgs.search.brave.com/L2bxcUGg5gJQqmRIeqNlB0yDGhwI4BijYv35OLkVTgk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/OTI5ODk1My9waG90/by9yZWFsLWVzdGF0/ZS1hZ2VudHMtc2hh/a2UtaGFuZHMtYWZ0/ZXItdGhlLXNpZ25p/bmctb2YtdGhlLWNv/bnRyYWN0LWFncmVl/bWVudC1pcy1jb21w/bGV0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9U0Z5YmJw/R01CMHdJb0kwdEpv/dEZxcHR6QVlLX21J/Q1ZJVE5kUUlYcW55/Yz0" width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2>Introduction :</h2>
                                <p>
                                    AG Property & Facility stands as a reputable name in the realm of property management, offering a comprehensive suite of services designed to streamline property ownership, enhance value, and provide hassle-free solutions for property owners. With a commitment to professionalism, innovation, and client satisfaction, AG Property & Facility has emerged as a trusted partner for those seeking efficient property management.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 className="text-center">Key Features:</h2>

                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Expert Property Managers:</strong> AG Property & Facility's property managers are experienced professionals who possess in-depth knowledge of real estate management and local regulations.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Solutions:</strong> Recognizing that each property has unique characteristics, the company provides customized management strategies that align with the property's goals and owner's preferences.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Technology Integration:</strong> Staying up-to-date with property management technology, AG Property & Facility employs advanced tools for efficient communication, financial tracking, and reporting.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Proactive Problem Solving:</strong> The company's proactive approach identifies and addresses issues promptly, preventing them from escalating and affecting property value.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tenant-Centric Approach:</strong> AG Property & Facility values tenant satisfaction. Their approach creates a positive living experience, fostering tenant retention and loyalty.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Legal Compliance:</strong> The company ensures that all property management practices adhere to local laws and regulations, protecting both property owners and tenants.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/Ol9YmkpQcqLPMWEMQ8GmXdVAcn_S2gsAbM-TNo3UvVM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/OTQwNDg0MC9waG90/by9hc2lhbi1idXNp/bmVzc21hbi1tYWtp/bmctYS1yZWFsLWVz/dGF0ZS1jb250cmFj/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bUFDSjY1bmlF/SHNRdUNSOVZmX3Nv/MVdiQmhSaWNQWlhx/ZUU3NG91bzdnRT0" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 className="text-start">Conclusion</h2>
                                <p>
                                    AG Property & Facility's property management services are a testament to their dedication to efficient, organized, and value-enhancing property ownership. With a focus on expertise, customization, and effective communication, they simplify property management for owners while providing tenants with quality living experiences. AG Property & Facility serves as a strategic partner, contributing to the success of property investments and ensuring peace of mind for property owners.
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
export default PropertyManagement