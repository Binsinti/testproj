import React from "react";
import { Card, Button } from "react-bootstrap";

function DownloadCard({ title, version, releaseDate, description, features, buttons }) {
    return (
        <Card className="mb-4">
            <Card.Body>
                <h3>{title}</h3>
                {version && releaseDate && (
                    <p className="text-muted">{version} | Released: {releaseDate}</p>
                )}
                {description && (
                    <p className="mt-3">{description}</p>
                )}
                {features && features.length > 0 && (
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
                {buttons && buttons.map((btn, index) => (
                    <Button 
                        key={index}
                        variant={btn.variant || "primary"} 
                        className="mt-3"
                        style={{ marginRight: index < buttons.length - 1 ? '0.5rem' : '0' }}
                    >
                        {btn.text}
                    </Button>
                ))}
            </Card.Body>
        </Card>
    );
}

export default DownloadCard;
