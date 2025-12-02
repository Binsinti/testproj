import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function DownloadsScreen() {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1 className="mb-4">Downloads</h1>
                    <p className="lead">
                        Get the latest software and drivers for your Zaopin gaming mice.
                    </p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Zaopin Software Suite</h3>
                            <p className="text-muted">Version 2.1.0 | Released: November 2025</p>
                            <p className="mt-3">
                                Complete software package for customizing your Zaopin mouse settings including:
                            </p>
                            <ul>
                                <li>DPI adjustment (up to 26000)</li>
                                <li>Polling rate configuration</li>
                                <li>RGB lighting customization</li>
                                <li>Button remapping</li>
                                <li>Macro programming</li>
                            </ul>
                            <Button variant="primary" className="mt-3">Download for Windows</Button>{' '}
                            <Button variant="outline-primary" className="mt-3">Download for macOS</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Firmware Updates</h3>
                            <p className="text-muted">Latest firmware for all Zaopin devices</p>
                            <p className="mt-3">
                                Keep your mouse up to date with the latest performance improvements and bug fixes.
                            </p>
                            <ul>
                                <li>Z1 PRO Firmware v1.5.2</li>
                                <li>Z2 4K Firmware v1.4.8</li>
                                <li>Improved sensor accuracy</li>
                                <li>Enhanced battery life</li>
                            </ul>
                            <Button variant="primary" className="mt-3">Check for Updates</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>User Manuals & Guides</h3>
                            <Row className="mt-3">
                                <Col md={4}>
                                    <p><strong>Z1 PRO User Manual</strong></p>
                                    <Button variant="outline-secondary" size="sm">Download PDF</Button>
                                </Col>
                                <Col md={4}>
                                    <p><strong>Z2 4K Quick Start Guide</strong></p>
                                    <Button variant="outline-secondary" size="sm">Download PDF</Button>
                                </Col>
                                <Col md={4}>
                                    <p><strong>Troubleshooting Guide</strong></p>
                                    <Button variant="outline-secondary" size="sm">Download PDF</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h4>System Requirements</h4>
                    <p>
                        <strong>Windows:</strong> Windows 10/11 (64-bit)<br/>
                        <strong>macOS:</strong> macOS 11 Big Sur or later<br/>
                        <strong>Storage:</strong> 500MB available space<br/>
                        <strong>Connection:</strong> USB 2.0 or higher
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default DownloadsScreen;
