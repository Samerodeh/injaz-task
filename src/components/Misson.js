import React from 'react';
import './Misson.css'
import './Main.css'
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Misson = () => {
    return (
        <div>
            <div className="logomission">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="missionlogo" src="https://samerodeh.github.io/injaz/assets/missionlogo.png" rounded />
                    </Col>
                </Row>
            </div>

            <h2 id="ourmission"> Our Mission </h2>

            <p id="to">
                “To inspire and prepare youth to become productive members of their society and
                <br></br>
                accelerate the development of the national economy”
            </p>


            <div className="educationpic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="education" src="https://samerodeh.github.io/injaz/assets/injazeducation.png" rounded />
                    </Col>
                </Row>

                <Button id="redarrow" variant="outline-success">Explore <RiArrowRightSFill id="leftarerow" /></Button>
            </div>



            <div className="startuppic">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="startup" src="https://samerodeh.github.io/injaz/assets/mystartup.png" rounded />
                    </Col>
                </Row>

                <Button id="yellowarrow" variant="outline-success">Explore <RiArrowRightSFill id="rightarrow" /></Button>
            </div>
        </div>
    );
};

export default Misson;