import { Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Commercial() {
  return (
    <>
      <Row>
        <Col lg={12} className="mb-5">
          <Header />
        </Col>
        <div className="section-2 mt-4 text-white p-2">
          <h1 className="text-center fw-bold mt-3 mb-3">Commercial</h1>
          <Row>
            <Col md={4} lg={4}>
              <Card style={{ background: "#272727" }} className="text-white m-1">
                <Card.Header>
                  <h4 className="text-center">Warm Shell</h4>
                </Card.Header>
                <Card.Body className="p-3">
                  <p className="four-lines">
                    AG Property & Facility takes pride in offering innovative and versatile warm shell spaces that provide a blank canvas for businesses to create their ideal work environment.
                  </p>
                  <Button as={Link} to="/Warm-Shell" className="border-0 enq mt-3 d-block" style={{ background: "#ff8000" }}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4}>
              <Card style={{ background: "#272727" }} className="text-white m-1">
                <Card.Header>
                  <h4 className="text-center">Office</h4>
                </Card.Header>
                <Card.Body className="p-3">
                  <p className="four-lines">
                    AG Property & Facility takes pride in offering exceptional office spaces designed to provide a productive, inspiring, and comfortable work environment for businesses of all sizes.
                  </p>
                  <Button as={Link} to="/Office" className="border-0 enq mt-3 d-block" style={{ background: "#ff8000" }}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4}>
              <Card style={{ background: "#272727" }} className="text-white m-1">
                <Card.Header>
                  <h4 className="text-center">Large Office</h4>
                </Card.Header>
                <Card.Body className="p-3">
                  <p className="four-lines">
                    AG Property & Facility takes pride in offering expansive and well-designed large office spaces that cater to the needs of businesses seeking ample room for growth, collaboration, and innovation.
                  </p>
                  <Button as={Link} to="/Large-Office" className="border-0 enq mt-3 d-block" style={{ background: "#ff8000" }}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4}>
              <Card style={{ background: "#272727" }} className="text-white m-1">
                <Card.Header>
                  <h4 className="text-center">Event</h4>
                </Card.Header>
                <Card.Body className="p-3">
                  <p className="four-lines">
                    AG Property & Facility takes pride in offering versatile and well-designed event spaces that provide the perfect backdrop for memorable occasions.
                  </p>
                  <Button as={Link} to="/Event" className="border-0 enq mt-3 d-block" style={{ background: "#ff8000" }}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Col lg={12} className="">
          <Footer />
        </Col>
      </Row>
    </>
  )
}
export default Commercial