import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutScreen() {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1 className="mb-4">About Zaopin</h1>
                    <p className="lead">
                        Welcome to Zaopin, your premier destination for high-performance gaming mice.
                    </p>
                    
                    <h3 className="mt-4">Our Mission</h3>
                    <p>
                        At Zaopin, we are dedicated to creating cutting-edge gaming peripherals that empower gamers to achieve their full potential. Our mission is to deliver exceptional quality, innovative design, and unparalleled performance in every product we create.
                    </p>

                    <h3 className="mt-4">Innovation & Technology</h3>
                    <p>
                        We specialize in ultra-lightweight gaming mice featuring the latest technology, including:
                    </p>
                    <ul>
                        <li>PAW3395 high-performance sensors with up to 26000 DPI</li>
                        <li>4000Hz polling rate for lightning-fast response times</li>
                        <li>Tri-mode connectivity (2.4GHz wireless, Bluetooth, and wired USB-C)</li>
                        <li>Hot-swappable micro-switches for customizable click feel</li>
                        <li>Ultra-lightweight designs (as low as 52g) for effortless control</li>
                    </ul>

                    <h3 className="mt-4">Quality & Craftsmanship</h3>
                    <p>
                        Every Zaopin product is crafted with meticulous attention to detail. We use premium materials and components, including Huano Blue Shell Pink Dot micro-switches, to ensure durability and exceptional performance. Our ergonomic designs provide comfort during extended gaming sessions.
                    </p>

                    <h3 className="mt-4">Community First</h3>
                    <p>
                        We value our gaming community and continuously seek feedback to improve our products. Whether you're a professional esports athlete or a casual gamer, Zaopin is committed to enhancing your gaming experience.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutScreen;
