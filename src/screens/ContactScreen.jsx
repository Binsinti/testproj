import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ContactScreen() {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1 className="mb-4">Contact Us</h1>
                    <p className="lead">
                        Have questions or need support? We're here to help!
                    </p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Customer Support</h3>
                            <p className="mt-3">
                                <strong>Email:</strong> support@zaopin.com<br/>
                                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)
                            </p>
                            <p>
                                Our dedicated support team is ready to assist you with product inquiries, technical support, warranty claims, and any other questions you may have.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Business Inquiries</h3>
                            <p className="mt-3">
                                <strong>Email:</strong> business@zaopin.com<br/>
                                <strong>Partnerships:</strong> partnerships@zaopin.com
                            </p>
                            <p>
                                For wholesale inquiries, sponsorship opportunities, or partnership proposals, please reach out to our business development team.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h3>Warranty & Returns</h3>
                    <p>
                        All Zaopin products come with a 2-year limited warranty. For warranty claims or return requests, please contact our support team at support@zaopin.com with your order number and details about the issue.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactScreen;
