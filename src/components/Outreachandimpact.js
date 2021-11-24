import React from 'react';
import './Outreachandimpact.css'
import './Main.css'
import Outreachbackground from '../assest/outreachandimpact.png'
import Training from '../assest/training.png'
import Youth from '../assest/youth.png'
import Volunteering from '../assest/volunteering.png'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Outreachandimpact = () => {
    return (
        <div>
            <div className="outreachbackground">
                <img id="outreachbackgroundpic" src={Outreachbackground} alt="" />
            </div>

            <h1 id="OUTREACH">OUTREACH AND IMPACT</h1>

            <div className="trainingpic">
                <img id="training" src={Training} alt="" />
            </div>

            <h1 id="num1">3,000,000+</h1>

            <p id="pTraining">Training Opportunities</p>

            <div className="youthpic">
                <img id="youth" src={Youth} alt="" />
            </div>

            <h1 id="num2">750,000</h1>

            <p id="pYouth">Youth reached per year</p>

            <div className="volunteeringic">
                <img id="volunteering" src={Volunteering} alt="" />
            </div>

            <h1 id="num3">34,000+</h1>

            <p id="pVolunteering">Volunteering Opportunities</p>

            <Button id="learnmore1" variant="outline-success"> Learn More <RiArrowRightSFill id="arrow" /></Button>

        </div>


    );
};

export default Outreachandimpact;