import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function FacilityManagement() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <Header />
                </Col>
                <Col lg={12} className="p-3 mt-4 section-2 text-white">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Facility Management</h1>
                            <Col lg={6} className="p-4">
                                <img src="https://imgs.search.brave.com/M35jJWtn1JHrVqYKQD9_gCTKyGhtg9BK2fwUhnJys98/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDE0MDE0/LzE4OTUvaS82MDAv/ZGVwb3NpdHBob3Rv/c18xODk1Mzg5Ny1z/dG9jay1waG90by1m/YWNpbGl0eS1tYW5h/Z2VtZW50LXJlYWwt/ZXN0YXRlLWN5Y2xl/LmpwZw" width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                
                                <p>
                                    AG Property & Facility is a renowned provider of comprehensive facility management services, dedicated to enhancing the efficiency, functionality, and overall experience of various properties. With a strategic blend of expertise, innovation, and customer-centricity, AG Property & Facility has emerged as a trusted partner for businesses seeking to optimize their operational environments.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#fff"}} className="text-center">Key Features:</h2>

                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Holistic Approach:</strong> AG Property & Facility takes a holistic view of facility management, addressing various aspects to create an integrated and optimized environment.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Strategies:</strong> Recognizing that every property has unique needs, the company crafts individualized facility management strategies to meet specific requirements.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Technology Integration:</strong> Staying at the forefront of technology, AG Property & Facility incorporates innovative tools for tasks such as maintenance tracking, space utilization analysis, and energy management.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Continuous Improvement:</strong> The company is committed to ongoing improvement. They analyze data, gather feedback, and adapt strategies to continuously enhance facility operations.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Sustainability Focus:</strong> AG Property & Facility promotes sustainability by implementing eco-friendly practices and helping clients achieve their sustainability goals.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Transparent Reporting:</strong> Clear and comprehensive reporting keeps clients informed about facility performance, expenditures, and improvements.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/PLBWqv5_NMmZrK7Xe8FTfX6HuESODmTPi--wlWvtbqo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTU2MTM1/OS82MTEzL3YvNjAw/L2RlcG9zaXRwaG90/b3NfNjExMzM1NTkt/c3RvY2staWxsdXN0/cmF0aW9uLWZvbGRl/ci13aXRoLWZhY2ls/aXR5LW1hbmFnZW1l/bnQtZG9jdW1lbnRz/LmpwZw" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                
                                <p>
                                    AG Property & Facility's facility management services redefine the way properties are managed, delivering efficiency, innovation, and excellence. With a steadfast commitment to enhancing facility environments, they have positioned themselves as leaders in the field, offering tailor-made solutions that contribute to operational success, occupant satisfaction, and long-term value. As a strategic partner, AG Property & Facility transforms facilities into well-optimized and thriving spaces.
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
export default FacilityManagement