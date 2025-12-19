import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DownloadCard from "../components/DownloadCard";

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
                    <DownloadCard
                        title="Zaopin Software Suite"
                        version="Version 2.1.0"
                        releaseDate="November 2025"
                        description="Complete software package for customizing your Zaopin mouse settings including:"
                        features={[
                            "DPI adjustment (up to 26000)",
                            "Polling rate configuration",
                            "RGB lighting customization",
                            "Button remapping",
                            "Macro programming"
                        ]}
                        buttons={[
                            { text: "Download for Windows", variant: "primary" },
                            { text: "Download for macOS", variant: "outline-primary" }
                        ]}
                    />
                </Col>

                <Col md={6}>
                    <DownloadCard
                        title="Firmware Updates"
                        version={null}
                        releaseDate={null}
                        description="Keep your mouse up to date with the latest performance improvements and bug fixes."
                        features={[
                            "Z1 PRO Firmware v1.5.2",
                            "Z2 4K Firmware v1.4.8",
                            "Improved sensor accuracy",
                            "Enhanced battery life"
                        ]}
                        buttons={[
                            { text: "Check for Updates", variant: "primary" }
                        ]}
                    />
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
