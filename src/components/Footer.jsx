import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">

        <Container>
            <Row>   
                <Col className ="text-center py3-3">    

                    Copyright &copy; {new Date().getFullYear()} Zaopin

                </Col>
            </Row>
        </Container>    

    </footer>
  );
}

export default Footer;   
