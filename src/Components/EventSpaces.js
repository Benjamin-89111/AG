import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function EventSpaces() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="section-3 p-5">
                    <Container>
                        <Row>
                            <h1 className="text-center mb-3">Event Spaces</h1>
                            <Col lg={6} className="p-4">
                                <img src="https://imgs.search.brave.com/w8qFvsGjSFsjIomu9-EtDvIejpmBHxthE9hV92rJCPA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JnYW5pemVyc2lu/ZGlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMy9l/eGhpYml0aW9uLWlu/LWluZGlhLmpwZw" width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2>Introduction :</h2>
                                <p>
                                    AG Property & Facility takes pride in offering versatile and well-designed event spaces that provide the perfect backdrop for memorable occasions. With a focus on aesthetics, functionality, and flexibility, AG Property & Facility has established itself as a trusted provider of event spaces that cater to a wide range of events and celebrations.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 className="text-center">Key Features:</h2>

                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Adaptability:</strong> AG Property & Facility's event spaces can be transformed to accommodate various event sizes, themes, and setups, ensuring a perfect fit.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Experience:</strong> The company understands that every event is unique. Their event spaces can be tailored to align with specific event goals, branding, and ambiance.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Professional Support:</strong> AG Property & Facility offers professional event support, including setup, technical assistance, and coordination, ensuring events run smoothly.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Networking Opportunities:</strong> Being part of AG Property & Facility's event spaces provides opportunities for attendees to connect, network, and collaborate.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Memorable Atmosphere:</strong> The aesthetic design, modern facilities, and adaptable layouts contribute to creating a memorable and impactful event atmosphere.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Comprehensive Packages:</strong> AG Property & Facility offers comprehensive event packages that include not only the space but also additional services such as catering and event planning.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/CYbtenLhw6pv_GwIJ55I82YN3Apxw5u4XXN4SU288Is/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/dGFndmVudWUuY29t/L3Jlc2l6ZS80Yy8y/Ny9maXQtNTM1LTM1/ODs0ODMxMy1tYWlu/LXNwYWNlLXJvb20u/anBlZw" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 className="text-start">Conclusion</h2>
                                <p>
                                    AG Property & Facility's event spaces are a testament to their commitment to providing a canvas for unforgettable moments. With a focus on adaptability, aesthetics, and convenience, they offer the ideal setting for events that leave a lasting impression. AG Property & Facility's event spaces aren't just spaces; they are stages where celebrations, ideas, and connections come to life in the most captivating way.
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
export default EventSpaces