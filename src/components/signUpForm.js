import React from 'react';
import { Row, Col, Figure, Form, Button, Carousel } from 'react-bootstrap';

export default class SignUpForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            validated: false,
            isLoading: false,
            firstname: "mark",
            lastname: "twain",
            email: "ab@mail.com",
            password: "",
            confirmPassword: "",
            newUser: null
        };
    }

    checkValidity() {
        if (this.state.firstname.length > 0 &&
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword) {
                this.setState({ validated: true });
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit =  async event => {
        // event.preventDefault();
        console.log("inside signup handleSubmit function!!");
        const form = event.currentTarget;
        this.checkValidity();
        if (this.state.validated === false) {
            event.preventDefault();
            alert("Invalid entries, Please enter your information again!!")
            event.stopPropagation();
        }else{
            alert("Thanks ! We will get back to you.")
        }
    }

    render() {
        const { validated } = this.state.validated;
        return (
            <main>

                <Row >
                    <Col xs={12} md={{ span: 4, offset: 4 }} >
                        <Form className="signup"
                            validated={validated}
                            onSubmit={this.handleSubmit}
                            noValidate>
                            <Form.Row>
                                <Form.Group as={Col} controlId="firstname">
                                    <Form.Control placeholder="First name"
                                        type="text"
                                        onChange={this.handleChange}
                                        required />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your first name.
                                        </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="lastname">
                                    <Form.Control placeholder="Last name"
                                        type="text"
                                        onChange={this.handleChange}
                                        required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="email">
                                    <Form.Control type="email" placeholder="Enter email"
                                        onChange={this.handleChange}
                                        required />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your email address.
                                        </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="password">
                                    <Form.Control type="password" placeholder="Password"
                                        onChange={this.handleChange}
                                        required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="confirmPassword">
                                    <Form.Control type="password" placeholder="Confirm Password"
                                        onChange={this.handleChange}
                                        required />
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                            Password didn't match.
                                        </Form.Control.Feedback>
                            </Form.Row>

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