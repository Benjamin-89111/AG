import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import Header from './Header';
// import img from '../Images/OurServices.jpg';
// import Footer from "./Footer";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function OurServices() {


    return (
        <>
            <Row>
                <Col lg={12} className="p-3">
                    <Row>
                        <h3 style={{ color: "#fff" }} className="text-center text-uppercase fw-bold">Our Services</h3>
                        <h4 className="text-center text-white mb-3">Your All in One Source</h4>
                        <Col md={4} lg={3} >
                            <Link target="_parent" to="/Property-Management">
                                <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                    <Card.Header>
                                        <h3 style={{ color: "#fff", fontSize: "20px" }} className="text-center fw-semibold ">Property Management</h3>

                                    </Card.Header>
                                    <div className="card-body p-3">
                                        <p style={{ fontWeight: "lighter" }} className="text-center three-lines text-white">
                                            Property management services involve the professional oversight and administration of real estate properties to maximize value and ensure seamless operations.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} lg={3} >
                            <Link target="_parent" to="/Facility-Management">
                                <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                    <Card.Header>
                                        <h3 style={{ color: "#fff", fontSize: "20px" }} className="text-center fw-semibold ">
                                            Facility Management
                                        </h3>
                                    </Card.Header>
                                    <div className="card-body p-3">
                                        <p style={{ fontWeight: "lighter" }} className="text-center three-lines text-white">
                                            Maintenance services cover a diverse set of tasks to maintain and extend the life of both commercial and residential structures. These activities involve preserving, repairing, and enhancing the functionality and longevity of assets, equipment, and facilities.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} lg={3} >
                            <Link target="_parent" to="/Maintainence">
                                <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                    <Card.Header>
                                        <h3 style={{ color: "#fff", fontSize: "20px" }} className="text-center fw-semibold">
                                            Maintainence
                                        </h3>
                                    </Card.Header>
                                    <div className="card-body p-3">
                                        <p style={{ fontWeight: "lighter" }} className="text-center three-lines text-white">
                                            Maintenance services encompass a variety of activities aimed at preserving, repairing, and prolonging the lifespan of assets, equipment, and structures.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4} lg={3} >
                            <Link target="_parent" to="/Cleaning">
                                <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                    <Card.Header>
                                        <h3 style={{ color: "#fff", fontSize: "20px" }} className="text-center fw-semibold">Cleaning</h3>
                                    </Card.Header>
                                    <div className="card-body p-3">
                                        <p style={{ fontWeight: "lighter" }} className="text-center three-lines text-white">
                                            Cleaning services require meticulous sanitization and organization of both commercial and residential spaces to provide a hygienic and harmonious atmosphere.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    );
}

export default OurServices;
