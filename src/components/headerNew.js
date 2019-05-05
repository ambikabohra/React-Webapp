import React from 'react';
import logo from '../logo.svg';
import { Row, Col,Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class HeaderNew extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = { 
    //         pageName:  "Sign Up",
    //     };
    // }

    // componentDidMount(){
    //     this.setState({ 
    //         pageName: this.props.page,
    //     });
    // }

    render() {
        const pagename= this.props.page;
        const buttonText = (pagename == "signUp") ? "Log In" : "Sign Up";
        const pathURL= (pagename == "signUp") ? "/" : "/signUp";
        console.log(pagename+ " "+ buttonText);

        return (
            <header>
                <Row>
                    <Col><img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="company logo"
                /></Col>
                <Col>
                <Nav className="justify-content-end" activeKey="/home" >
                
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Form>
                        <Link to={pathURL}><Button variant="outline-primary">{buttonText}</Button></Link>
                        </Form>
                    </Nav.Item>
                </Nav> 
                </Col>
                </Row>
            </header>
        );
    }
}