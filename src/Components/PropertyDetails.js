// src/components/PropertyDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import propertyData from "./propertyData"
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertyData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Header />
        </Col>
        <Col lg={12} className="section-2">
          <Container>
            <Card className="p-4 m-3">
              <Card.Body className="text-justify">

                <h2 style={{ textDecoration: "underline" }} className="fw-bold text-center text-dark mb-3">Property Details</h2>

                <table class="table ">

                  <tbody>
                    <tr>
                      <td className="fw-semibold">Property Type</td>
                      <td>{property.type}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Land Area</td>
                      <td>{property.landArea}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Land Size</td>
                      <td>{property.landSize}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Address</td>
                      <td>{property.address}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Features</td>
                      <td>{property.features}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Building Area</td>
                      <td>{property.buildingarea}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Age of Property</td>
                      <td>{property.ageOfProperty}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Furnished</td>
                      <td>{property.furnished}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Rent/Sale</td>
                      <td className="">{property.rentOrSale}</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Rate</td>
                      <td className="">{property.rate}</td>
                    </tr>

                  </tbody>
                </table>
                <Link to="/Enquire">
                  <h6 style={{ color: "#ff8000" }} className="text-center ctc mt-2 fw-bold">For More Details Contact Our Support</h6>
                </Link>
              </Card.Body>
            </Card>

          </Container>
        </Col>
        <Col lg={12}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetail;
