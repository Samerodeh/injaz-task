import React from 'react';
import './Mediacente.css'
import './Main.css'
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Mediacente = () => {
    return (
        <div>
            <div className="mediabackground">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="mediacenter" src="http://127.0.0.1:5500/assets/mediabackground.png" rounded />
                    </Col>
                </Row>

            </div>

            <div className="medialogo">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="mediacenterlogo" src="http://127.0.0.1:5500/assets/medialogo.png" rounded />
                    </Col>
                </Row>

            </div>

            <h1 id="MEDIA">MEDIA CENTER</h1>

            <Button id="learnmore4" variant="outline-success"> Learn More <RiArrowRightSFill id="arrow4" /></Button>

            <div className="media1">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="media1pic" src="http://127.0.0.1:5500/assets/media1.png" rounded />
                    </Col>
                </Row>

            </div>

            <p id="joint">
                Joint cooperation between INJAZ and
                <br></br>
                Bank of Jordan within the "Adoption of
                <br></br>
                Schools" program
            </p>

            <div className="media2">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="media2pic" src="http://127.0.0.1:5500/assets/media2.png" rounded />
                    </Col>
                </Row>

            </div>

            <p id="mr">
                Mr. Hakam Abu Al-Failat, General
                <br></br>
                Director, Aqaba Logistics Village-Ayla
                <br></br>
                Secondary School for Boys
            </p>

            <div className="media3">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="media3pic" src="http://127.0.0.1:5500/assets/media3.png" rounded />
                    </Col>
                </Row>

            </div>

            <p id="declare">
                We declare our commitment to be a
                <br></br>
                supportive work environment for
                <br></br>
                women! Be part of the change and add
                <br></br>
                your voice to the #tqdar campaign
            </p>


        </div>
    );
};

export default Mediacente;