import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubscribeForm from "./SubscribeForm";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>Zaopin</h4>
                        <p className="mt-3">
                            <span 
                                onClick={() => handleScrollToSection('about')} 
                                style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', cursor: 'pointer' }}
                            >
                                About Us
                            </span>
                            <a 
                                href="/downloads" 
                                style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}
                            >
                                Downloads
                            </a>
                            <span 
                                onClick={() => handleScrollToSection('contact')} 
                                style={{ color: 'inherit', textDecoration: 'none', display: 'block', cursor: 'pointer' }}
                            >
                                Contact
                            </span>
                        </p>
                    </Col>

                    <Col md={4}>
                        <h4>Support</h4>
                        <p className="mt-3">
                            <a 
                                href="mailto:support@zaopin.com" 
                                style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}
                            >
                                Contact Us
                            </a>
                            <span style={{ display: 'block', marginBottom: '0.5rem' }}>Warranty</span>
                            <span style={{ display: 'block' }}>Return Policy</span>
                        </p>
                    </Col>

                    <Col md={4}>
                        <h4>Subscribe to Get Latest Deals</h4>
                        <SubscribeForm />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={6}>
                        <p className="text-muted small">© {new Date().getFullYear()} Zaopin</p>
                    </Col>
                    <Col md={6}>
                        <SocialMediaLinks alignment="end" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;   
