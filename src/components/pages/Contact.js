import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

function MessageSent () {
    alert("Your Message has been sent")
}

function Contact() {
    return (
        <div>

            <Container>
                <br/>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Message" />
                    </Form.Group>


                    <Button onClick={MessageSent} variant="primary" type="submit">
                    Submit
                    </Button>

                    <br/>
                    
                </Form>

            </Container>
        </div>
    )
}

    

export default Contact;