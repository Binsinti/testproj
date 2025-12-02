import React from "react";
import Product from "../components/Product";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import products from "../products"; 
import { Col, Row, Container } from "react-bootstrap";
import "../homescreen.css";

function HomeScreen() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection 
                title="Premium Gaming Mice" 
                subtitle="Precision. Performance. Perfection." 
            />

            {/* Products Section */}
            <Container className="products-section">
                <SectionHeader title="Our Products" />
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* About Section */}
            <div id="about" className="py-5" style={{ backgroundColor: '#fff' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src="/images/zaopin-logo-full.jpg" alt="Zaopin Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Col>
                        <Col md={6}>
                            <h2 className="mb-4">From Community, For Community.</h2>
                            <p>
                                Founded in 2023 by gamers with engineering backgrounds, Zaopin started because we wanted wireless lightweight gaming mice without compromises and at fair prices. But the options were limited so we took matters into our own hands.
                            </p>
                            <p>
                                Since launching our first mouse, we've built a reputation for making some of the lightest wireless gaming mice on the market while keeping quality high. We're focused on making community-driven gear you can actually count on.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Contact Section */}
            <div id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>Customer Support</h3>
                            <p className="mt-3">
                                <strong>Email:</strong> support@zaopin.com<br/>
                                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)
                            </p>
                            <p>
                                Our dedicated support team is ready to assist you with product inquiries, technical support, warranty claims, and any other questions you may have.
                            </p>
                        </Col>

                        <Col md={6}>
                            <h3>Follow Us</h3>
                            <p className="mt-3">
                                Stay connected with Zaopin for the latest product updates, gaming tips, and community events:
                            </p>
                            <p>
                                <strong>Twitter:</strong> @ZaopinGaming<br/>
                                <strong>Instagram:</strong> @zaopin_official<br/>
                                <strong>Discord:</strong> discord.gg/zaopin<br/>
                                <strong>YouTube:</strong> Zaopin Gaming
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeScreen;
