import React from "react";
import Product from "../components/Product";
import products from "../products"; 
import { Col, Row, Container } from "react-bootstrap";
import "../homescreen.css";

function HomeScreen() {
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section">
                <Container>
                    <div className="hero-content">
                        <h1 className="hero-title">Premium Gaming Mice</h1>
                        <p className="hero-subtitle">Precision. Performance. Perfection.</p>
                    </div>
                </Container>
            </div>

            {/* Products Section */}
            <Container className="products-section">
                <h2 className="section-title">Our Products</h2>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default HomeScreen;
