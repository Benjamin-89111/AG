import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' },
];

const ProductList = () => {
    const history = useHistory();

    const handleViewDetails = productId => {
        history.push(`/product/${productId}`);
    };

    return (
        <>
            <Row>

                <Col lg={12}>
                    <Header />
                </Col>
                <div className="product-list">
                    {products.map(product => (
                        <Card key={product.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Button onClick={() => handleViewDetails(product.id)}>View Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Row>
        </>
    );
};

export default ProductList;
