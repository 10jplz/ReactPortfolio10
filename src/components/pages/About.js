import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Network from "./assets/Network.jpg";
import Max from "./assets/Max.jpeg";


function About() {
    return (
        <div>
            <br/>

            <Container>
                <Row>
                    <Col>
                    <h1>About Me</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Image src={Network} thumbnail/>
                    </Col>
                    <Col>
                    <h2>Work Experience</h2>
        <p>Bilingual Network Support Engineer offering in-depth understanding of network infrastructure specially troubleshooting networks. Holding 3 years of experience as Network Support Engineer and have wide knowledge about design and implementation of network topology troubleshooting and enhancement activities.</p>
                    </Col>

                </Row>
                <Row>
                    <Col>
                    <Image src={Max} thumbnail/>
                    </Col>
                    <Col>
                    <h2>Personal Life</h2>
        <p>On September 2018 my life changed forever because I became a father and its been 2 years of pure happiness. Hearing my son Max laugh is one of the things I enjoy the most.  I don't have any social media accounts, however I will add the Icons at the bottom. </p>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default About