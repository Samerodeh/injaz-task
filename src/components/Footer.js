import React from 'react';
import './Footer.css'
import './Main.css'
import Footerbackground from'../assest/footerbackground.png'
import Footerlogo from'../assest/footerlogo.png'
import Button from 'react-bootstrap/Button'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaSnapchatGhost,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="footerbackground">
                <img id="pic" src={Footerbackground} alt="" />
            </div>

            <div className="footerlogo">
                <img id="footerlogopic" src={Footerlogo} alt="" />
            </div>

            <h4 id="aboutus">About Us</h4>

            <Button id="overview" variant="primary" type="submit"> Overview </Button>
            <Button id="mission" variant="primary" type="submit"> Mission </Button>
            <Button id="letter" variant="primary" type="submit"> Letter from CEO </Button>
            <Button id="trustees" variant="primary" type="submit"> Board of Trustees </Button>
            <Button id="directors" variant="primary" type="submit"> Board of Directors </Button>
            <Button id="management" variant="primary" type="submit"> Management Team </Button>
            <Button id="careers" variant="primary" type="submit"> Careers </Button>
            <Button id="contactus" variant="primary" type="submit"> Contact Us </Button>

            <h4 id="impact">Impact & Outreach</h4>

            <h4 id="model">Model</h4>

            <Button id="cumulative" variant="primary" type="submit"> Cumulative </Button>
            <Button id="practical" variant="primary" type="submit"> Practical </Button>
            <Button id="holistic" variant="primary" type="submit"> Holistic </Button>
            <Button id="ppp" variant="primary" type="submit"> PPP </Button>
            <Button id="social" variant="primary" type="submit"> Social Contribution </Button>

            <h4 id="partners">Partners</h4>

            <Button id="trustees1" variant="primary" type="submit"> Board of Trustees </Button>
            <Button id="partners1" variant="primary" type="submit"> Partners </Button>
            <Button id="volunteers" variant="primary" type="submit"> Volunteers </Button>

            <h4 id="media">Media Center</h4>

            <Button id="news" variant="primary" type="submit"> News </Button>
            <Button id="events" variant="primary" type="submit"> Events & Activities </Button>

            <div id="footericons">
                <FaFacebookF id="facebookf"/>
                &nbsp; &nbsp; &nbsp;
                <FaInstagram id="instagramf"/>
                &nbsp; &nbsp; &nbsp;
                <FaTwitter id="twitterf"/>
                &nbsp; &nbsp; &nbsp;
                <FaSnapchatGhost id="snapchatf"/>
                &nbsp; &nbsp; &nbsp;
                <FaLinkedinIn id="linkedinf"/>
                &nbsp; &nbsp; &nbsp;
                <FaYoutube id="youtubef"/>
            </div>

            <p id="copyrights"> Copyright &copy; 2021 INJAZ</p>

        </div>
    );
};

export default Footer;