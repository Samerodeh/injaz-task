import React from 'react';
import './Corevaluesmethodology.css'
import './Main.css'
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Corevaluesmethodology = () => {
    return (
        <div>
            <div className="corebackground">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="core" src="https://samerodeh.github.io/injaz/assets/core.png" rounded />
                    </Col>
                </Row>

            </div>
            <h1 id="values">CORE VALUES & METHODOLOGY</h1>

            <p id="conviction">Conviction in the fundamental role of youth in the advancement of the national economy</p>

            <div className="educationdev">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="dev" src="https://samerodeh.github.io/injaz/assets/redblue.png" rounded />
                    </Col>
                </Row>
            </div> 

            <p id="pEducation">Education <br></br> Development</p>

            <div className="Nurturingpic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="Nurturing" src="https://samerodeh.github.io/injaz/assets/blueblue.png" rounded />
                    </Col>
                </Row>
            </div>

            <p id="pNurturing">Nurturing <br></br> Entrepreneurial <br></br> Mindset</p>

            <div className="Promotingpic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="Promoting" src="https://samerodeh.github.io/injaz/assets/goldblue.png" rounded />
                    </Col>
                </Row>
            </div>

            <p id="pPromoting">Promoting <br></br> Volunteerism</p>

            <Button id="learnmore2" variant="outline-success"> Learn More <RiArrowRightSFill id="arrow1"/></Button>


        </div>
    );
};

export default Corevaluesmethodology;