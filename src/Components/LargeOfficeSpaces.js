import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import bm1 from './bm.jpg'
import bm from './bm1.jpg'
import Footer from "./Footer"
function LargeOfficeSpaces() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12} className="p-3 text-white section-3">
                    <Container>
                        <Row>
                            <h1 className="text-center fw-bold mb-3">Large Office Spaces</h1>
                            <Col lg={6} className="p-4">
                                <img src="https://imgs.search.brave.com/LS97BpF1tMklfiIVFbPP890EEWedjWMyZPAS_BnpK_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LndvcmtzcGFj/ZS5jby51ay90cmFu/c2Zvcm0vNzE4Njhm/ZDItMzg0ZC00YmJm/LTgxMDktOWNkMmFm/NWFiMDYyL29mZmlj/ZS1zcGFjZS10by1y/ZW50LWF0LXNhbGlz/YnVyeS1ob3VzZS1z/YWxpc2J1cnktaG91/c2UtbG9uZG9uLXdh/bGwtbG9uZG9uLXVu/aXQtZmMtNDY0LTQ3/My0yNTU0LXNxLWZ0/LTIzNy1zcS1tP2lv/PXRyYW5zZm9ybTpm/aWxsLHdpZHRoOjU5/NyxoZWlnaHQ6Mzk0/JmZvcm1hdD13ZWJw/JnF1YWxpdHk9NjA" width="100%" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}}>Introduction :</h2>
                                <p>
                                    AG Property & Facility takes pride in offering expansive and well-designed large office spaces that cater to the needs of businesses seeking ample room for growth, collaboration, and innovation. With a focus on functionality, flexibility, and aesthetics, AG Property & Facility provides large office spaces that serve as the canvas for businesses to achieve their grand visions.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <h2 style={{color:"#ff8000"}} className="text-center">Key Features:</h2>
                                <ol>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Room for Innovation:</strong> AG Property & Facility's large office spaces provide an environment conducive to innovation, enabling businesses to brainstorm, collaborate, and create.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Scalable Solutions:</strong> These spaces are designed to accommodate businesses of various sizes, offering the scalability needed to adjust to changing requirements.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Tailored Configurations:</strong> Recognizing that each business has unique needs, AG Property & Facility allows businesses to configure the space layout to align with specific workflows.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Enhanced Collaboration:</strong> The open layouts and collaborative areas in these spaces foster communication and teamwork among employees, boosting productivity.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Professional Atmosphere:</strong> Large office spaces exude professionalism, making them ideal for companies that host clients, conduct meetings, and present their brand image.</li>
                                    <li style={{ fontSize: "18px", marginBottom: "1rem" }}><strong>Supportive Services:</strong> Alongside spacious environments, AG Property & Facility offers additional services such as maintenance, security, and facilities management to ensure a seamless work experience.</li>
                                </ol>

                            </Col>
                            <Col lg={6} className="p-4 order-lg-2">
                                <img src="https://imgs.search.brave.com/Cnqz6NYLzq61TPVG_fmxw3NmM529wOFua5y6YRe9A3o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LndvcmtzcGFj/ZS5jby51ay90cmFu/c2Zvcm0vZDk4N2Jh/YWQtZTMyZC00MTE5/LTljODEtNDgzYjA0/MDYwNGZlL29mZmlj/ZS1zcGFjZS10by1y/ZW50LWF0LWNvcmlu/dGhpYW4taG91c2Ut/bGFuZHNkb3duZS1y/b2FkLWxvbmRvbi11/bml0LWNvLTctNC02/MjMtc3EtZnQtNDI5/LXNxLW0_aW89dHJh/bnNmb3JtOmZpbGws/d2lkdGg6NTk3LGhl/aWdodDozOTQmZm9y/bWF0PXdlYnAmcXVh/bGl0eT02MA" className="w-100" />
                            </Col>
                            <Col lg={6} className="p-4">
                                <h2 style={{color:"#ff8000"}} className="text-start">Conclusion</h2>
                                <p>
                                    AG Property & Facility's large office spaces stand as a testament to their commitment to providing businesses with the physical foundation needed to achieve their aspirations. With an emphasis on adaptability, functionality, and convenience, these spaces offer the canvas on which businesses can paint their success stories. AG Property & Facility's large office spaces aren't just spaces; they are the launchpads for growth, creativity, and elevated achievements.
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
export default LargeOfficeSpaces