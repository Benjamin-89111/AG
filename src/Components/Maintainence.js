import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
function Maintainence() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="section-2 text-white p-3">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Maintainence</h1>
                            <Col lg={6} className="p-4">
                                <img src="https://imgs.search.brave.com/wddC6g_ZepXZ8ljguNKp8SYejCWJa1jmV8egRHUZGa4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzYzLzkyLzQ3/LzM2MF9GXzI2Mzky/NDc1M19acUZNQ1B3/ek5CMzROcldXMnVY/N3J2akNhV0NJalVH/OS5qcGc" width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}}>Introduction :</h2>
                                <p>
                                    AG Property & Facility stands as a premier provider of comprehensive maintenance services, offering a diverse range of solutions aimed at keeping properties, facilities, and infrastructure in optimal condition. With a dedicated focus on quality, efficiency, and customer satisfaction, AG Property & Facility has become a trusted partner for businesses and organizations seeking reliable maintenance support.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#ff8000"}} className="text-center">Key Features:</h2>
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Experienced Technicians:</strong> AG Property & Facility boasts a team of experienced technicians proficient in various maintenance disciplines, ensuring top-notch service delivery.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Customized Plans:</strong> Recognizing that every property has unique requirements, the company creates customized maintenance plans that align with your goals and budget.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Proactive Approach:</strong> AG Property & Facility takes a proactive stance by identifying potential issues early on and implementing preventive measures to avoid costly breakdowns.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Efficient Resource Management:</strong> The company optimizes the allocation of resources, minimizing wastage while delivering efficient and effective maintenance solutions.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>State-of-the-Art Tools:</strong> Staying updated with the latest tools and technologies, AG Property & Facility employs advanced equipment for accurate diagnostics and precise repairs.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Transparent Communication:</strong> Clear communication is integral to their service. Clients are kept informed about maintenance schedules, progress, and any necessary recommendations.</li>
                                </ol>
                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/vIkMBxdRIUyXTyfawoY3vikGj-v9lYdRtGCKWWjKVHw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/ODM3NTI5NC9waG90/by90ZWNobmljaWFu/LXJlcGFpcmluZy1h/aXItY29uZGl0aW9u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUJaSWtKOXFh/ckQ2czk0dVdRYXVM/NHE4OEZ0NjVrcDd4/RU5zVUJNcklmalU9" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}} className="text-start">Conclusion</h2>
                                <p>
                                    AG Property & Facility's maintenance services go beyond routine upkeep; they are a testament to the company's commitment to excellence and customer satisfaction. With a focus on quality, professionalism, and tailored solutions, they ensure that properties and facilities are maintained at their best, contributing to operational efficiency and long-term value. As a reliable partner, AG Property & Facility transforms maintenance from a necessity to an asset for businesses and property owners.
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
export default Maintainence