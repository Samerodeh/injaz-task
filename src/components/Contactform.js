import React from 'react';
import './Contactform.css'
import './Main.css'
import Formbackground from '../assest/formbackground.png'
import Locationicon from '../assest/locationicon.png'
import Telephoneicon from '../assest/telephoneicon.png'
import Emailicon from '../assest/emailicon.png'
import Boxicon from '../assest/boxicon.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { RiArrowRightSFill } from 'react-icons/ri';

const Contactform = () => {
    return (
        <div>
            <div className="formbackground">
                <img id="formbackgroundpic" src={Formbackground} alt="" />
            </div>

            <h1 id="CONTACT">CONTACT US</h1>

            <div className="locationicon">
                <img id="locationiconpic" src={Locationicon} alt="" />
            </div>

            <h3 id="address">ADDRESS:</h3>
            <p id="makkah">(20) Makkah Street, Salam Neighborhood</p>

            <div className="telephoneicon">
                <img id="telephoneiconpic" src={Telephoneicon} alt="" />
            </div>

            <h3 id="telephone">TELEPHONE:</h3>
            <p id="numbers">+962 6 565 7410 / +962 6 565 7409</p>

            <div className="emailicon">
                <img id="emailiconpic" src={Emailicon} alt="" />
            </div>

            <h3 id="email">EMAIL</h3>
            <p id="mail">email@injaz.org.jo</p>

            <div className="boxicon">
                <img id="boxiconpic" src={Boxicon} alt="" />
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
                        Send message <RiArrowRightSFill id="arrow5" />
                    </Button>
                </Form></div>

        </div>


    );
};

export default Contactform;