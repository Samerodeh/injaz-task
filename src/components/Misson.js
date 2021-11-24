import React from 'react';
import './Misson.css'
import './Main.css'
import Missionlogo from '../assest/missionlogo.png'
import Education from '../assest/injazeducation.png'
import Startup from '../assest/mystartup.png'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Misson = () => {
    return (
        <div>
            <div className="logomission">
                <img id="missionlogo" src={Missionlogo} alt="" />
            </div>

            <h2 id="ourmission"> Our Mission </h2>

            <p id="to">
                “To inspire and prepare youth to become productive members of their society and
                <br></br>
                accelerate the development of the national economy”
            </p>


            <div className="educationpic">
                <img id="education" src={Education} alt="" />

                <Button id="redarrow" variant="outline-success">Explore <RiArrowRightSFill id="leftarerow" /></Button>
            </div>



            <div className="startuppic">
                <img id="startup" src={Startup} alt="" />

                <Button id="yellowarrow" variant="outline-success">Explore <RiArrowRightSFill id="rightarrow" /></Button>
            </div>
        </div>
    );
};

export default Misson;