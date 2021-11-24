import React from 'react';
import './Header.css'
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Headerbackground from '../assest/headerbackground.png'
import Headerlolgo from '../assest/headerlolgo.png'
import Elearning from '../assest/elearning.png'
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
                    <img src={Headerbackground} alt="" />
                </Carousel.Item>
            </Carousel>

            <div class="headerlogo">
                <img id="headerlogo" src={Headerlolgo} alt="" />
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
                <img id="elearninglogo" src={Elearning} alt="" />
            </div>

            <div class="dropbutton">
                <Button id="drop">
                    <FaBars />
                </Button>
            </div>

            <div id="headericons">
                <FaFacebookF id="facebookh" />
                &nbsp;
                <FaInstagram id="instagramh" />
                &nbsp;
                <FaTwitter id="twitterh" />
                &nbsp;
                <FaSnapchatGhost id="snapchath" />
                &nbsp;
                <FaLinkedinIn id="linkedinh" />
                &nbsp;
                <FaYoutube id="youtubeh" />
            </div>
        </div>
    );
};

export default Header;