import { Card, Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"

function About() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12}>
                    <div className="section-2 text-white  p-5">
                        <Row className="container">
                            <h1 className="text-center mb-3">About Us</h1>
                            <Col lg={6}>
                                <img style={{ objectFit: "cover" }} src="https://imgs.search.brave.com/WXzC8dEh77Nj3tXNVBQH3m48sbe1BDeBSoWtH8MaRG4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDEyNTg3Ni9waG90/by9idXNpbmVzcy1t/ZWV0aW5nLXN0b2Nr/LXBob3RvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1qR2k3/dElLR21UTzRtdVY4/SnAtRHBiODgwLWRh/OG1oQ2tKcFVnYkpa/cG44PQ" className="w-100 h-100 p-3" />
                            </Col>
                            <Col lg={6} className="p-3">
                                <h2>Who we are</h2>
                                <p>
                                    We are a medium-sized company providing Facilities Management and Building Services in Chennai. We put our people first, resulting in a hardworking and skilled team who are committed to getting the job done right.
                                </p>
                                <p>
                                    Our culture is defined by our values, beliefs and behaviours. AG Property & Facility has a unique approach that builds lasting relationships with our clients, which we achieve by staying true to our values, and ultimately by delivering outstanding customer service.
                                </p>
                                <p>
                                    Contract and relationship longevity and personalized service delivery are driven by our core values and company culture. Our values are how we approach every situation, how we treat our environment, our clients and each other – with CARE:
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="section-1 text-white p-5">
                        <Row className="container">
                            <Col lg={6} className="order-lg-2">
                                <img style={{ objectFit: "cover" }} src="https://imgs.search.brave.com/BTkJMw_X76FzQ7JDp5VkaQtd1JziEkTj0XyriQEq_Wk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/NDc4OTA0L3Bob3Rv/L2VtcHR5LW9mZmlj/ZS1zcGFjZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WEho/dzJGWlpMalB5ODY4/Sk84N3pEcGNSa2NH/NEFYT3FDdm5na3JP/VTVLQT0" className="w-100 h-100 p-3" />
                            </Col>
                            <Col lg={6} className="p-3">
                                <h2>Our History</h2>
                                <p>AG Property & Facility was founded in 2012 with a specific goal of competing for Facilities Management contracts. We were awarded a major Hard Services contract in 2022 with a multinational developer and Corprate Companies, which continues to this day. As our company has grown, our original board of directors have taken great care to enrich, not dilute our company culture, which has resulted in a motivated and hardworking team. Through our growth, we expanded into the Soft Services arena, resulting in the award of another major contract in 2022. We are currently engaged by a wide array of clients across many sectors, delivering first-class services from Total Facilities Management contracts to bespoke PM & FM plans and direct maintenance activities.</p>

                            </Col>
                        </Row>
                    </div>
                    <div className="section-2 text-white p-5">
                    <Row className="container">
                            <Col lg={6}>
                                <img style={{ objectFit: "cover" }} src="https://imgs.search.brave.com/HbB87Fls9gLcWLyUSUB7JPReRkSs32T9wDTS3PXPo6k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saW1i/bGVjbW1zLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvQmVzdC1G/YWNpbGl0eS1NYWlu/dGVuYW5jZS1DZXJ0/aWZpY2F0aW9uLTIw/MjEuanBn" className="w-100 h-100 p-3" />
                            </Col>
                            <Col lg={6} className="p-3">
                                <h2>Our Accreditations</h2>
                                <p>
                                    We hold memberships and accreditations with a wide range of industry-recognised organisations, including:
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col >
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default About