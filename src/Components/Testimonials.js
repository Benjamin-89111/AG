import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Testimonials.css'; // You can create your own CSS for styling

import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';

const Testimonials = () => {

    const sectionStyles = {
        backgroundImage: 'url("")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        backgroundImage: "linear-gradient(150deg,#005389 0%,#258B41 100%)",
        opacity: '.8',
        padding: '50px 0',
        color: 'white',
    };


    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    const products = [
    
        {
            id: 1,
            name: "Mark",
            university: "Accomodations Manager , Liverpool University",
            description: "Excellent time management. I like the availability of staff at very short notice and their honesty is impressive.",
            image: "https://images.pexels.com/photos/3501159/pexels-photo-3501159.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "RoseMary Carson",
            university: "Accomodations Manager , Liverpool University",
            description: "The service was very good, high quality, high standards and well supervised staff",
            image: "https://images.pexels.com/photos/3501159/pexels-photo-3501159.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: "Ann Willder",
            university: "Accomodations Manager , Liverpool University",
            description:"Throughout our first project with Crystal Facilities Management, we found the team to be reliable and efficient.",
            image: "https://images.pexels.com/photos/3501159/pexels-photo-3501159.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 4,
            name: "Jhon Lees",
            university: "Accomodations Manager , Liverpool University",
            description:"Throughout our first project with Crystal Facilities Management, we found the team to be reliable and efficient.",
            image: "https://images.pexels.com/photos/3501159/pexels-photo-3501159.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Alex",
            university: "Accomodations Manager , Liverpool University",
            description: "The service was very good, high quality, high standards and well supervised staff",
            image: "https://images.pexels.com/photos/3501159/pexels-photo-3501159.jpeg?auto=compress&cs=tinysrgb&w=600"
        },

    ];

    return (
        <>
            <div style={sectionStyles}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='text-white text-center text-uppercase mt-3'>Testimonials</h2>
                            <Slider {...carouselSettings}>
                                {products.map(products => (
                                    <div key={products.id} className="image-container">
                                        <div style={{height:'340px'}} class="card services ms-2 me-2 mt-3 mb-3 overflow-hidden">
                                            <div class="card-body">
                                                <div className='d-flex justify-content-center'>
                                                <img width="80px" height="80px" src={products.image} className="rounded-circle"/>
                                                </div>
                                                <p className='text-white text-center'>
                                                    {products.description}
                                                </p>
                                                <p style={{fontStyle:'italic'}} className='text-white text-center'>{products.name}</p>
                                                <p style={{fontStyle:'italic',color:'#3e7f3f'}} className='fw-bold text-center'>{products.university}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Testimonials;
