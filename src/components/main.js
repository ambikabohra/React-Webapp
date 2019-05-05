import React from 'react';
import { Row, Col, Form, Button, Carousel } from 'react-bootstrap';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Carousel interval="2000" fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/house1.jpg"
                            alt="First slide"
                            height="550px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/house2.jpg"
                            alt="Third slide"
                            height="550px"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/house3.jpeg"
                            alt="Third slide"
                            height="550px"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
              

            </main>
        );
    }
}