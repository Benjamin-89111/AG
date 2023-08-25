import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import cc from './Commercial Cleaning.jpg'
import cc1 from './cc.jpg'

function CommercialCleaning() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="p-5">
                    <Container>
                        <Row>
                            <h1 className="text-center mb-3">Commercial Cleaning</h1>
                            <Col lg={6} className="p-4">
                                <img src={cc} width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2>Introduction :</h2>
                                <p>
                                    AG Property & Facility is a leading commercial cleaning services company dedicated to providing
                                    top-tier cleaning solutions for businesses across various industries. With a strong commitment
                                    to excellence, professionalism, and customer satisfaction, AG Property & Facility has built a
                                    reputation as a trusted partner for maintaining clean, safe, and welcoming environments.
                                </p>
                            </Col>
                            {/* <Col lg={12}>
                                <h2 className="text-center">Services Offered</h2>
                                <ol>
                                    <li>
                                        <p>
                                            <span className="fw-bold">Office Cleaning:</span> AG Property & Facility specializes in thorough office cleaning services that ensure a pristine and organized workspace. From dusting and vacuuming to disinfecting high-touch surfaces, their team guarantees a healthy and productive work atmosphere.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="fw-bold">Retail Space Cleaning: </span> Retail environments require consistent cleaning to create an inviting shopping experience. AG Property & Facility's retail cleaning services focus on maintaining cleanliness in high-traffic areas, restrooms, and product displays.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="fw-bold">Industrial Cleaning:</span> AG Property & Facility recognizes the unique cleaning needs of industrial settings. They provide deep cleaning, machinery cleaning, and safety-focused solutions to maintain a safe and productive industrial workspace.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="fw-bold">Janitorial Services: </span> The company offers full-scale janitorial services tailored to each client's specific requirements. This includes regular cleaning, restroom maintenance, trash removal, and more.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="fw-bold">Window and Glass Cleaning:</span> AG Property & Facility ensures that your windows and glass surfaces are spotless, contributing to a bright and transparent interior.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="fw-bold">Floor Care:</span> From carpets to hardwood, AG Property & Facility employs advanced techniques to keep floors clean, polished, and safe.
                                        </p>
                                    </li>
                                </ol>
                            </Col> */}
                            <Col lg={12}>
                                <h2 className="text-center">Key Features:</h2>
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
                                <h2 className="text-center">Conclusion</h2>
                                <p>AG Property & Facility stands out as a premier commercial cleaning services provider, dedicated to elevating the cleanliness and hygiene standards of businesses. With their professional approach, comprehensive range of services, and commitment to customer satisfaction, they have become a trusted partner for companies seeking reliable and top-quality cleaning solutions.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default CommercialCleaning