import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function WarmShellSpaces() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <Header />
                </Col>
                <Col lg={12} className="section-3 mt-4 text-white p-3">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Warm Shell Spaces</h1>
                            <Col lg={6} className="p-5">
                                <img src="https://imgs.search.brave.com/hcQBuWJpMTZT1LXpXtWrKaOF-yXRlMqZq8VKXyh1Vq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW9wdGltaXplcmVh/bHR5LmNvbS9odWJm/cy9zaGVsbCUyMHNw/YWNlLmpwZWc" width="100%" />
                            </Col>
                            <Col lg={6} className="p-5">
                                
                                <p>
                                    AG Property & Facility takes pride in offering innovative and versatile warm shell spaces that provide a blank canvas for businesses to create their ideal work environment. With a focus on flexibility, functionality, and aesthetics, AG Property & Facility has established itself as a provider of thoughtfully designed spaces that cater to a wide range of business needs.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#fff"}} className="text-center">Key Features:</h2>
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Adaptable Spaces:</strong> AG Property & Facility's warm shell spaces are adaptable to various industries and business models, catering to startups, small businesses, and established corporations.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Personalized Experience:</strong> The company values your vision. Their warm shell spaces empower you to create an environment that resonates with your company culture and objectives.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Cost-Effective Solution:</strong> By providing the fundamental infrastructure, AG Property & Facility's warm shell spaces offer a cost-effective way to establish a new workspace.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Collaborative Atmosphere:</strong> The open floor plans and customizable layouts foster a collaborative atmosphere, enhancing teamwork and innovation among employees.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Scalability:</strong> Whether you need a compact space for a small team or a larger area for expansion, AG Property & Facility's warm shell spaces offer scalability to accommodate growth.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Supportive Services:</strong> Alongside warm shell spaces, AG Property & Facility offers additional services such as maintenance, security, and facilities management to ensure a seamless work environment.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/rAQ8aha6FT7pjcfNm49STriuNccVJ3WZBJwZySlTTPE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9sZWFzZS10by1t/ZS9jMDg4NmIzOC0x/MGYzLTRiYjctYTlh/NC00M2I1YzNmMDZj/YWJfV2FybStWYW5p/bGxhK1NoZWxsLkpQ/Rz9hdXRvPWNvbXBy/ZXNzLGZvcm1hdA" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-5">
                                
                                <p>
                                    AG Property & Facility's warm shell spaces represent a strategic approach to workspace solutions. By providing the foundation for businesses to create their unique work environment, they empower companies to thrive in spaces that align with their values and goals. With adaptability, affordability, and functionality at the core, AG Property & Facility's warm shell spaces set the stage for success and growth for a diverse range of businesses.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={12}>
                    <Footer/>
                </Col>
            </Row>
        </>
    )
}
export default WarmShellSpaces