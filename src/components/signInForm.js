import React from 'react';
import { Row, Col, Figure, Form, Button, Carousel } from 'react-bootstrap';

export default class SignInForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = { validated: false };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render() {
        const { validated } = this.state;
        return (
            <main>

                <Row >
                    <Col xs={12} md={{ span: 4, offset: 4 }} >

                        <Form className="signup">
                            <Form.Group as={Row} controlId="formBasicEmail"
                                validated={validated}
                                onSubmit={e => this.handleSubmit(e)}
                                noValidate>
                                <Form.Label column >Email address</Form.Label>
                                {/* <Col sm="6"> */}
                                <Form.Control type="email" placeholder="Enter email"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                        </Form.Control.Feedback>
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                {/* </Col> */}
                            
                            </Form.Group>

                            <Form.Group as={Row} controlId="formBasicPassword">
                                <Form.Label column>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                        </Form.Control.Feedback>
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                            {/* <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}

                            <Form.Group as={Row} className="justify-content-center">
                                <Col sm="3" >
                                    <Button variant="primary" size="sm" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                                <Col sm="3">
                                    <Button column variant="secondary" size="sm" type="reset">
                                        Cancel
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </main>
        );
    }
}