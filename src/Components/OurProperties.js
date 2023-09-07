import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import Header from './Header';
// import img from '../Images/OurProperties.jpg';
// import Footer from "./Footer";
import { Icon } from "@iconify/react";

function OurProperties() {

    const [products, setProducts] = useState([

        {
            id: 2,
            name: "Warm Shell Spaces",
            description: "Warm shell spaces refer to commercial real estate units that are partially fitted out with basic infrastructure, making them ready for customization according to tenants' specific needs."
        },
        {
            id: 3,
            name: "Office Spaces",
            description: "Office spaces provide dedicated environments for work, collaboration, and productivity within professional settings."
        },
        {
            id: 4,
            name: "Large Office Spaces",
            description: "Large office spaces provide ample room and flexibility for businesses to accommodate their operations and teams within a spacious and functional environment."
        },
        {
            id: 5,
            name: "Event Spaces",
            description: "Event spaces offer versatile and well-equipped environments for hosting gatherings, meetings, and special occasions."
        },

    ]);

    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Row cla>
                <Col lg={12} className="p-3">
                    <Container>
                        <Row>
                            <h2 style={{ color: "#ff8000" }} className="text-center text-uppercase fw-bold  mb-1">Our Properties</h2>
                            <h4 className="text-center text-white mb-3">We Cover Everything</h4>
                            {currentProducts.map((product) => (
                                <Col md={4} lg={3} key={product.id}>
                                    <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                        <div className="card-body p-3">
                                            <h3 style={{ color: "#ff8000", fontSize: "20px" }} className="text-center fw-semibold mb-3">{product.name}</h3>
                                            <p style={{ fontWeight: "lighter" }} className="text-center text-white">{product.description}</p>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
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
