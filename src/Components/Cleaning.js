import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function Cleaning() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <Header />
                </Col>
                <Col lg={12} className="p-3 mt-4 section-2 text-white">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Cleaning</h1>
                            <Col lg={6} className="p-5">
                                <img src="https://imgs.search.brave.com/g2H5vL0AvOfPBCRp_MgzwbL341r_zj3YMaAQ0LR7eaU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY4/NjE0OTA4L3Bob3Rv/L3N0ZWFtLWNsZWFu/aW5nLWNhcnBldHMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUY2cERyR3ludktX/SG1zWmxjQzZaemtl/OXJQVlhtV2d0VXJ1/MV9nNXdCLVk9" width="100%" />
                            </Col>
                            <Col lg={6} className="p-5">
                                
                                <p>
                                    AG Property & Facility takes pride in offering exceptional cleaning services that cater to the diverse needs of businesses and properties. With a commitment to cleanliness, hygiene, and customer satisfaction, AG Property & Facility has established itself as a reliable partner for maintaining pristine environments.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#fff"}} className="text-center">Key Features:</h2>
                               
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Expert Cleaning Crew:</strong> AG Property & Facility's team consists of expert cleaners who are skilled in using appropriate cleaning methods and equipment for various environments.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Cleaning Plans:</strong> Recognizing that each space has specific requirements, the company creates tailored cleaning plans that address the unique needs of each client.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Eco-Friendly Practices:</strong> AG Property & Facility is committed to eco-friendly cleaning practices, utilizing environmentally responsible products and techniques to minimize their impact on the environment.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Quality Control Measures:</strong> The company maintains stringent quality control measures to ensure that every cleaning task is carried out to the highest standards.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Flexible Scheduling:</strong> AG Property & Facility understands the need for flexibility. They offer convenient scheduling options to minimize disruptions to clients' operations.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Customer Satisfaction:</strong> Client satisfaction is paramount. AG Property & Facility places importance on feedback and constantly strives to exceed expectations.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/aoX_jLw7BMWOS4N8bkwVgaBT7d_U7bZrKA6c5RoQAuI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/Mjc4MDI3L3Bob3Rv/L2NsZWFuaW5nLXRh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cDNSSTVGSlEy/MXhMOENkV2ViM1Rj/OU44NGlrR3d1TFVq/VVpIQ0JzUHVXRT0" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-5">
                                
                                <p>
                                    AG Property & Facility's cleaning services are a testament to their dedication to creating cleaner, healthier, and more appealing environments. With a focus on expertise, customization, and client-centricity, they have positioned themselves as a go-to partner for businesses and individuals seeking professional cleaning solutions. AG Property & Facility's services go beyond cleanliness; they contribute to a positive atmosphere and a better quality of life for all.
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
export default Cleaning