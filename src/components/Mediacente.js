import React from 'react';
import './Mediacente.css'
import './Main.css'
import Mediacenterbackground from '../assest/mediabackground.png'
import Mediacenterlogo from '../assest/medialogo.png'
import Mediajoint from '../assest/media1.png'
import Mediamr from '../assest/media2.png'
import Mediawe from '../assest/media3.png'
import Button from 'react-bootstrap/Button'
import { RiArrowRightSFill } from 'react-icons/ri';

const Mediacente = () => {
    return (
        <div>
            <div className="mediabackground">
                <img id="mediacenter" src={Mediacenterbackground} alt="" />
            </div>

            <div className="medialogo">
                <img id="mediacenterlogo" src={Mediacenterlogo} alt="" />
            </div>

            <h1 id="MEDIA">MEDIA CENTER</h1>

            <Button id="learnmore4" variant="outline-success"> Learn More <RiArrowRightSFill id="arrow4" /></Button>

            <div className="media1">
                <img id="media1pic" src={Mediajoint} alt="" />
            </div>

            <p id="joint">
                Joint cooperation between INJAZ and
                <br></br>
                Bank of Jordan within the "Adoption of
                <br></br>
                Schools" program
            </p>

            <div className="media2">
                <img id="media2pic" src={Mediamr} alt="" />
            </div>

            <p id="mr">
                Mr. Hakam Abu Al-Failat, General
                <br></br>
                Director, Aqaba Logistics Village-Ayla
                <br></br>
                Secondary School for Boys
            </p>

            <div className="media3">
                <img id="media3pic" src={Mediawe} alt="" />
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