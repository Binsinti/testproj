import React from "react";
import { Container } from "react-bootstrap";
import "../homescreen.css";

function HeroSection({ title, subtitle }) {
    const heroStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-mice.jpg)"
    };
    return (
        <div className="hero-section" style={heroStyle}>
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
