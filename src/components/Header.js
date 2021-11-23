import React from 'react';
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaSnapchatGhost,
    FaLinkedinIn,
    FaYoutube,
    FaBars,
    FaSearch
} from 'react-icons/fa';





const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://github.com/Samerodeh/injaz/raw/main/assets/1.png"
                        alt=""
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://github.com/Samerodeh/injaz/raw/main/assets/1.png"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://github.com/Samerodeh/injaz/raw/main/assets/1.png"
                        alt=""
                    />
                </Carousel.Item> */}
            </Carousel>

            <div class="headerlogo">
                <Row>
                    <Col xs={6} md={4}>
                        <Image id="headerlogo" src="https://samerodeh.github.io/injaz/assets/2.png" rounded />
                    </Col>
                </Row>
            </div>

            <p id="line">_______________________________</p>

            <p id="new"> New Space for Generations </p>

            <Form className="searchform">
                <FormControl id="searchcontrol"
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                />

                <Button id="searchbutton" variant="outline-success"> <FaSearch /></Button>
            </Form>

            <div class="learning">
                <Row >
                    <Col xs={6} md={4}>
                        <Image id="elearninglogo" src="https://samerodeh.github.io/injaz/assets/img4.png" rounded />
                    </Col>
                </Row>
            </div>

            <div class="dropbutton">
                <Button id="drop">
                    <FaBars />
                </Button>
            </div>

            <div id="headericons">
                <FaFacebookF id="facebookh"/>
                <FaInstagram id="instagramh"/>
                <FaTwitter id="twitterh"/>
                <FaSnapchatGhost id="snapchath"/>
                <FaLinkedinIn id="linkedinh"/>
                <FaYoutube id="youtubeh"/>
            </div>
        </div>
    );
};

export default Header;