import React from 'react';
import './Map.css'
import './Main.css'
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Map = () => {
    return (
        <div>
            <div className="Map">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="Mappic" src="http://127.0.0.1:5500/assets/map.png" rounded />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Map;