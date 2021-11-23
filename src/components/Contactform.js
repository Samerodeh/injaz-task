import React from 'react';
import './Contactform.css'
import './Main.css'
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { RiArrowRightSFill } from 'react-icons/ri';

const Contactform = () => {
    return (
        <div>
            <div className="formbackground">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="formbackgroundpic" src="http://127.0.0.1:5500/assets/formbackground.png" rounded />
                    </Col>
                </Row>
            </div>

            <h1 id="CONTACT">CONTACT US</h1>

            <div className="locationicon">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="locationiconpic" src="http://127.0.0.1:5500/assets/locationicon.png" rounded />
                    </Col>
                </Row>
            </div>

            <h3 id="address">ADDRESS:</h3>
            <p id="makkah">(20) Makkah Street, Salam Neighborhood</p>

            <div className="telephoneicon">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="telephoneiconpic" src="http://127.0.0.1:5500/assets/telephoneicon.png" rounded />
                    </Col>
                </Row>
            </div>

            <h3 id="telephone">TELEPHONE:</h3>
            <p id="numbers">+962 6 565 7410 / +962 6 565 7409</p>

            <div className="emailicon">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="emailiconpic" src="http://127.0.0.1:5500/assets/emailicon.png" rounded />
                    </Col>
                </Row>
            </div>

            <h3 id="email">EMAIL</h3>
            <p id="mail">email@injaz.org.jo</p>

            <div className="boxicon">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="boxiconpic" src="http://127.0.0.1:5500/assets/boxicon.png" rounded />
                    </Col>
                </Row>
            </div>

            <h3 id="pobox">P.O. BOX:</h3>
            <p id="amman">910542, Amman 11191, Jordan</p>
            <div className="contactform">
                <Form id="contactform">
                    <h4 id="h4conatctform">CONTACT FORM</h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control id="name" type="name" placeholder="FULL NAME" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control id="emailaddress" type="email" placeholder="EMAIL ADDRESS" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control id="phonenumber" type="phonenumber" placeholder="PHONE NUMBER" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control id="message" type="message" placeholder="YOUR MESSAGE" />
                    </Form.Group>

                    <Button id="formbutton" variant="primary" type="submit">
                    Send message <RiArrowRightSFill id="arrow5"/>
                    </Button>
                </Form></div>

        </div>


    );
};

export default Contactform;