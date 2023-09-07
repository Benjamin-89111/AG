import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import cc from './Commercial Cleaning.jpg'
import cc1 from './cc.jpg'
import Footer from "./Footer"

function CommercialCleaning() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="p-3 section-2 text-white">
                    <Container>
                        <Row className="">
                            <h1  className="text-center fw-bold mb-3">Commercial Cleaning</h1>
                            <Col lg={6} className="p-4">
                                <img src={cc} width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}}>Introduction :</h2>
                                <p>
                                    AG Property & Facility is a leading commercial cleaning services company dedicated to providing
                                    top-tier cleaning solutions for businesses across various industries. With a strong commitment
                                    to excellence, professionalism, and customer satisfaction, AG Property & Facility has built a
                                    reputation as a trusted partner for maintaining clean, safe, and welcoming environments.
                                </p>
                            </Col>
                            
                            <Col lg={12}>
                                <h2 style={{color:"#ff8000"}} className="text-center">Key Features:</h2>
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><b>Experienced Team:</b> AG Property & Facility boasts a team of skilled and trained cleaning professionals who understand the nuances of different industries and cleaning requirements.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><b>Customized Solutions:</b> Recognizing that each business has unique needs, AG Property & Facility crafts customized cleaning plans to ensure a tailored approach for every client.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><b>Green Cleaning:</b> The company is committed to using eco-friendly cleaning products and practices that minimize environmental impact while ensuring effective cleaning.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><b>24/7 Availability:</b> Understanding the need for flexibility, AG Property & Facility offers round-the-clock services, ensuring minimal disruption to your business operations.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><b>Quality Assurance:</b> The company maintains strict quality control measures to ensure that each cleaning task is completed to the highest standards.</li>
                                </ol>
                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src={cc1} className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}} className="">Conclusion</h2>
                                <p>AG Property & Facility stands out as a premier commercial cleaning services provider, dedicated to elevating the cleanliness and hygiene standards of businesses. With their professional approach, comprehensive range of services, and commitment to customer satisfaction, they have become a trusted partner for companies seeking reliable and top-quality cleaning solutions.</p>
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
export default CommercialCleaning