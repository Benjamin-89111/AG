// src/components/PropertyList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import propertyData from "./propertyData";
import Pagination from "./Pagination";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import Header from './Header'
import Footer from './Footer'

const itemsPerPage = 6; // Number of items per page

const PropertyList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(propertyData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <Header />
        </Col>
        <div className="section-2 text-white">
          <h1 className="text-center fw-bold mt-3 mb-3">Property Listings</h1>
          <Container>
            <Row>
              {propertyData
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((property) => (
                  <Col key={property.id} md={4}>
                    <Card className="bg-dark text-white m-1">
                      <Card.Body className="p-3">
                        <h6>Type :<span style={{ fontSize: "15px" }} className="ms-2 fw-light">{property.type}</span></h6>
                        <h6>Location:<span style={{ fontSize: "15px" }} className="ms-2 fw-light">{property.location}</span></h6>
                        <h6>Land Area:<span style={{ fontSize: "15px" }} className="ms-2 fw-light">{property.landArea}</span></h6>
                        <h6>Status:<span style={{ fontSize: "15px" }} className="ms-2 fw-light">{property.status}</span></h6>
                        <Button as={Link} to={`/property/${property.id}`} className="border-0 mt-3 d-block" style={{ background: "#ff8000" }}>
                          View Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
          <div className="d-flex mt-3 section-2 justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>

        <Col lg={12}>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default PropertyList;
