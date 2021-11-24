import React from 'react';
import './Corevaluesmethodology.css'
import './Main.css'
import Core from '../assest/core.png'
import Redblue from '../assest/redblue.png'
import Blueblue from '../assest/blueblue.png'
import Goldblue from '../assest/goldblue.png'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Corevaluesmethodology = () => {
    return (
        <div>
            <div className="corebackground">
                <img id="core" src={Core} alt="" />
            </div>
            <h1 id="values">CORE VALUES & METHODOLOGY</h1>

            <p id="conviction">Conviction in the fundamental role of youth in the advancement of the national economy</p>

            <div className="educationdev">
                <img id="dev" src={Redblue} alt="" />
            </div>

            <p id="pEducation">Education <br></br> Development</p>

            <div className="Nurturingpic">
                <img id="Nurturing" src={Blueblue} alt="" />
            </div>

            <p id="pNurturing">Nurturing <br></br> Entrepreneurial <br></br> Mindset</p>

            <div className="Promotingpic">
                <img id="Promoting" src={Goldblue} alt="" />
            </div>

            <p id="pPromoting">Promoting <br></br> Volunteerism</p>

            <Button id="learnmore2" variant="outline-success"> Learn More <RiArrowRightSFill id="arrow1" /></Button>


        </div>
    );
};

export default Corevaluesmethodology;