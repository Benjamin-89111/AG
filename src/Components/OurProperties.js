import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import Header from './Header';
// import img from '../Images/OurProperties.jpg';
// import Footer from "./Footer";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function OurProperties() {


    return (
        <>
            <Row cla>
                <Col lg={12} className="p-3">
                    <Container>
                        <Row className="justify-content-center">
                            <h2 style={{ color: "#fff" }} className="text-center text-uppercase fw-bold  mb-1">Our Properties</h2>
                            <h4 className="text-center text-white mb-3">We've got it all</h4>
                            {/* {currentProducts.map((product) => ( */}
                            <Col md={4} lg={3}>
                                <Link to="/Residential">
                                    <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                        <Card.Header>
                                            <h3 style={{ color: "#fff", fontSize: "20px" }} className="text-center fw-semibold">Residential</h3>
                                        </Card.Header>
                                        <div className="card-body p-3">
                                            <p style={{ fontWeight: "lighter" }} className="text-center three-lines text-white">
                                                From cozy cottages to luxurious estates, we've got the perfect home to suit every individual's desires and requirements. Find your ideal match with us today!
                                            </p>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md={4} lg={3} >
                                <Link to="/Commercial">
                                    <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                        <Card.Header>
                                            <h3 style={{ color: "#fff", fontSize: "20px" }} className="text-center fw-semibold ">Commercial</h3>

                                        </Card.Header>
                                        <div className="card-body p-3">
                                            <p style={{ fontWeight: "lighter" }} className="text-center three-lines text-white">
                                                From startups to established giants, we've got the perfect commercial space waiting for you. Your vision, your space – let's make it happen
                                            </p>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                            {/* ))} */}
                        </Row>

                    </Container>
                </Col>
                {/* <Col lg={12}>
                    <Footer />
                </Col> */}
            </Row>
        </>
    );
}

export default OurProperties;
