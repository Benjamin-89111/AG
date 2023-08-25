import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Blog.css'; // You can create your own CSS for styling
import img from './Blog1.png'
import img1 from './Blog2.png'
import img2 from './Blog3.png'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';

const Blog = () => {

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
            id: 3,
            name: "Guarding the Wilderness: The Role of Mobile Patrol Services",
            university: "Accomodations Manager , Liverpool University",
            description: "Throughout our first project with Crystal Facilities Management, we found the team to be reliable and efficient.",
            image: img1,
        },
        {
            id: 4,
            name: "Deep Cleaning Dilemma: Is it Worth the Investment or Can",
            university: "Accomodations Manager , Liverpool University",
            description: "Throughout our first project with Crystal Facilities Management, we found the team to be reliable and efficient.",
            image: img2,
        },
        {
            id: 2,
            name: "Unmasking Hidden Threats: How to Conduct a",
            university: "Accomodations Manager , Liverpool University",
            description: "The service was very good, high quality, high standards and well supervised staff",
            image: img
        },

    ];

    return (
        <>
            <div className='pg-1'>
                <Container>
                    <Row className='p-5'>
                        <Col>
                            <h3 style={{ color: '' }} className='text-center text-white text-uppercase mt-3'>Blogs</h3>
                            <h2 className='text-center text-white text-capitalize mb-3'>Latest From Us</h2>
                            <Slider {...carouselSettings}>
                                {products.map(products => (
                                    <div key={products.id} className="image-container">
                                        <div style={{ height: '400px', }} class="card m-2 overflow-hidden">
                                            <div class="card-img-top"><img class="img-fluid" src={products.image} alt="Card image cap" /></div>
                                            <div class="card-body">
                                                <h5 class="card-title">{products.name}</h5>
                                                <p class="mb-1 card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                {/* <span role='button' style={{fontSize:'14px'}} className='text-success fw-bold text-uppercase'>Read More</span> */}
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

export default Blog;
