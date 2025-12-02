import React from "react";
import { Container } from "react-bootstrap";
import "../homescreen.css";

function HeroSection({ title, subtitle }) {
    return (
        <div className="hero-section">
            <Container>
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1> 
                    <p className="hero-subtitle">{subtitle}</p>
                </div>
            </Container>
        </div>
    );
}

export default HeroSection;
