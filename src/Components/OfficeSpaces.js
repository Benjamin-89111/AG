import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function OfficeSpaces() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="section-3 text-white p-3">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Office Spaces</h1>
                            <Col lg={6} className="p-4">
                                <img src="https://imgs.search.brave.com/1yIvAdgcnubxdnOdm31CcHIFYgT1ID8GIFPiOUra8G8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG5j/Yy5wcm9wZXJ0eXNo/YXJrLmNvbS9pbWFn/ZXMvNDU3NDgxQUIt/RUMxQy00NTRELUJG/REMtMTFENzk0NTdF/QTZFLzQ5MzZfMi5q/cGc_d2lkdGg9NDUw" width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}}>Introduction :</h2>
                                <p>
                                    AG Property & Facility takes pride in offering exceptional office spaces designed to provide a productive, inspiring, and comfortable work environment for businesses of all sizes. With a focus on innovation, functionality, and aesthetics, AG Property & Facility has established itself as a provider of thoughtfully crafted office spaces that cater to diverse business needs.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#ff8000"}} className="text-center">Key Features:</h2>
                                
                                <ol>
                                   <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Adaptable Environment:</strong> AG Property & Facility's office spaces are designed to adapt to evolving business needs, offering the flexibility to scale up or down as required.</li>
                                   <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Solutions:</strong> The company understands that different industries and businesses have unique requirements. Their office spaces can be tailored to align with specific objectives.</li>
                                   <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Wellness Focus:</strong> With amenities that prioritize employee well-being, AG Property & Facility creates an environment that promotes comfort, health, and work-life balance.</li>
                                   <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Networking Opportunities:</strong> Being a part of AG Property & Facility's office spaces allows businesses to connect with like-minded professionals, fostering networking and collaboration.</li>
                                   <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>On-Site Support:</strong> The company provides on-site support, including maintenance and administrative services, ensuring a seamless and hassle-free work environment.</li>
                                   <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Enhanced Productivity:</strong> Thoughtful design, modern amenities, and a conducive atmosphere contribute to enhanced employee productivity and creativity.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/SUoz_UvygVR9Qc6Q7tPAlICQzFGw7j0Ci6oZU1I8M0s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b2ZmaWNlc3BhY2Vz/bnkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA1L05Z/Qy1TaG9ydC1UZXJt/LU9mZmljZS1TcGFj/ZS04MTh4NTQwLmpw/Zw" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}} className="text-start">Conclusion</h2>
                                <p>
                                    AG Property & Facility's office spaces stand as a testament to their commitment to offering top-quality work environments that nurture business growth and success. With an emphasis on adaptability, aesthetics, and convenience, they provide businesses with the space they need to thrive. AG Property & Facility's office spaces aren't just spaces; they are catalysts for innovation, collaboration, and excellence in the workplace.
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
export default OfficeSpaces