import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product ({ product }) {
    return (
        <Card className="my-3 p-3 rounded h-100 d-flex flex-column">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" style={{ objectFit: 'contain', height: '300px' }} />
        </Link>
        <Card.Body className="d-flex flex-column">
            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Title as="div" className="mb-3">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h3" className="mt-auto">${product.price}</Card.Text>
        </Card.Body>
        </Card>
    );
}

export default Product;
