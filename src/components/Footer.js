import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    
    return (
            <Container className="bg-success text-light">
                <Row>
                    <Col>
                    <Row>
                        <Col>Email</Col>
                        <Col>10JPLZ@Gmail.com</Col>
                    </Row>
                    </Col>

                    <Col>
                    <Row>
                        <Col>Phone</Col>
                        <Col>801-300-6898</Col>
                    </Row>
                    </Col>

                    <Col>
                    <Row>
                        <Col>LinkedIn</Col>
                        <Col><a href="https://www.linkedin.com/in/jose-contreras-1624b3a9/">LinkedIn</a></Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col>GitHub Profile</Col>
                        <Col><a href="https://github.com/10jplz">Github</a></Col>
                    </Row>
                    </Col>
                </Row>

            </Container>

    );
}

export default Footer

