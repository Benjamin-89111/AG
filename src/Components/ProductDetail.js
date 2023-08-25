import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
  { id: 3, name: 'Product 3', description: 'Description 3' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  return (
    <div className="product-detail">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
