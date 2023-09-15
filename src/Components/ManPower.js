import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function ManPower() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <Header />
                </Col>
                <Col lg={12} className="section-2 mt-4 text-white p-3">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Man Power</h1>
                            <Col lg={6} className="p-5">
                                <img src="https://imgs.search.brave.com/aogXzIXu8McAuRwiDGOqPWOItSzjBwm0uoV_nXpDAgI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8yNjI3MDIx/LzQ3MzgvaS82MDAv/ZGVwb3NpdHBob3Rv/c180NzM4MzI2My1z/dG9jay1waG90by1t/YWxlLWpvYi1zZWFy/Y2guanBn" width="100%" />
                            </Col>
                            <Col lg={6} className="p-5">
                                
                                <p>
                                    AG Property & Facility is a distinguished provider of reliable and skilled man-power services designed to meet the diverse staffing needs of businesses across industries. With a focus on efficiency, flexibility, and excellence, AG Property & Facility has established itself as a go-to partner for companies seeking qualified and motivated personnel to enhance their project teams.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#fff"}} className="text-center">Key Features:</h2>
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Vetted and Trained:</strong> AG Property & Facility's man-power team comprises vetted professionals who undergo comprehensive training, ensuring their competence and readiness for various roles.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Adaptable Solutions:</strong> The company understands that staffing needs can change. They offer flexible staffing solutions that can be adjusted based on project demands.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Quality Assurance:</strong> With a commitment to quality, AG Property & Facility ensures that the personnel they provide meet or exceed industry standards, contributing positively to your projects.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Prompt Deployment:</strong> Whether it's a short-term or long-term project, the company ensures timely deployment of manpower, minimizing downtime and keeping projects on track.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Customer-Centric Approach:</strong> AG Property & Facility values open communication and collaboration. They work closely with clients to understand their requirements and provide tailor-made staffing solutions.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Compliance and Legalities:</strong> The company adheres to labor laws and regulations, ensuring that the personnel provided are legally compliant, protecting both clients and employees.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/rNzZ30MxCRVlpbACjEYp-5_GjcmOy6uqEBeYoamJQgc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93b3Jr/ZXJzLTY3MjQ4My5q/cGc" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-5">
                                
                                <p>
                                    AG Property & Facility's man-power services stand as a testament to their commitment to providing reliable and skilled personnel to meet a wide range of staffing needs. With a focus on professionalism, adaptability, and client satisfaction, they empower businesses by enhancing their project teams with competent and motivated individuals. AG Property & Facility serves as a strategic partner for businesses seeking to achieve their goals efficiently and effectively.
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
export default ManPower