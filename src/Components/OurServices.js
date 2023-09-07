import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import Header from './Header';
// import img from '../Images/OurServices.jpg';
// import Footer from "./Footer";
import { Icon } from "@iconify/react";

function OurServices() {

    const [products, setProducts] = useState([
        {
            id: 7,
            name: "Property Management",
            description: "Property management services involve the professional oversight and administration of real estate properties to maximize value and ensure seamless operations."
        },
        {
            id: 1,
            name: "Commercial Cleaning",
            description: "Commercial cleaning services provide thorough and professional cleaning solutions for businesses to maintain a clean and hygienic environment.        "
        },
        {
            id: 2,
            name: "Building Maintainence",
            description: "Building maintenance services encompass a wide range of tasks and activities aimed at ensuring the proper upkeep, functionality, and longevity of structures and facilities."
        },
        {
            id: 3,
            name: "Man-Power",
            description: "Manpower services involve providing skilled and reliable personnel to fulfill various job roles and tasks across different industries and sectors."
        },
        {
            id: 4,
            name: "Facility Management",
            description: "Facility management services encompass comprehensive oversight and optimization of physical spaces and resources to enhance functionality, safety, and user experience within a facility."
        },
        {
            id: 5,
            name: "Maintainence",
            description:"Maintenance services encompass a variety of activities aimed at preserving, repairing, and prolonging the lifespan of assets, equipment, and structures."
        },
        {
            id: 6,
            name: "Cleaning",
            description:"Cleaning services involve thorough sanitation and tidying of spaces to create a hygienic and organized environment."
        }
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
            <Row>
                <Col lg={12} className=" p-5">
                    <Container>
                        <Row>
                            <h2 className="text-center text-white">Our Services</h2>
                            <h4 className="text-center text-white mb-3">We Cover Everything</h4>
                            {currentProducts.map((product) => (
                                <Col md={4} lg={3} key={product.id}>
                                    <Card style={{ borderRadius: '0px' }} className="services-1 m-2">
                                        <div className="card-body">
                                            <h4 className="text-center text-white mb-3">{product.name}</h4>
                                            <p className="text-center text-white">{product.description}</p>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default OurServices;
