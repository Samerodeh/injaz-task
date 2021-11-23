import React from 'react';
import './Outreachandimpact.css'
import './Main.css'
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Outreachandimpact = () => {
    return (
        <div>
            <div className="outreachbackground">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="startup" src="https://samerodeh.github.io/injaz/assets/outreachandimpact.png" rounded />
                    </Col>
                </Row>

            </div>

            <h1 id="OUTREACH">OUTREACH AND IMPACT</h1>

            <div className="trainingpic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="training" src="https://samerodeh.github.io/injaz/assets/training.png" rounded />
                    </Col>
                </Row>

            </div>

            <h1 id="num1">3,000,000+</h1>

            <p id="pTraining">Training Opportunities</p>

            <div className="youthpic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="youth" src="https://samerodeh.github.io/injaz/assets/youth.png" rounded />
                    </Col>
                </Row>

            </div>

            <h1 id="num2">750,000</h1>

            <p id="pYouth">Youth reached per year</p>

            <div className="volunteeringic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="volunteering" src="https://samerodeh.github.io/injaz/assets/volunteering.png" rounded />
                    </Col>
                </Row>

            </div>

            <h1 id="num3">34,000+</h1>

            <p id="pVolunteering">Volunteering Opportunities</p>

            <Button id="learnmore1" variant="outline-success"> Learn More <RiArrowRightSFill id="arrow"/></Button>

        </div>


    );
};

export default Outreachandimpact;