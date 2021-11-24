import React from 'react';
import './Joinus.css'
import './Main.css'
import Joinusbackground from '../assest/joinus.png'
import Button from 'react-bootstrap/Button'
import { BsPlusCircle } from 'react-icons/bs';

const Joinus = () => {
    return (
        <div>
            <div className="joinus">
                <img id="joinusbackground" src={Joinusbackground} alt="" />
            </div>

            <h3 id="Volunteers">Volunteers</h3>

            <p id="we">
                We would like to thank you for
                <br></br>
                your interest in volunteering
                <br></br>
                with INJAZ
            </p>

            <Button id="Plus1" variant="outline-success"><BsPlusCircle id="plus1" /></Button>

            <h3 id="Mentors">Mentors</h3>

            <p id="to1">
                To learn more about
                <br></br>
                becoming an INJAZ
                <br></br>
                mentor
            </p>

            <Button id="Plus2" variant="outline-success"><BsPlusCircle id="plus2" /></Button>

            <h3 id="Partners">Partners</h3>

            <p id="to2">
                To learn more about
                <br></br>
                becoming an INJAZ
                <br></br>
                Partners
            </p>

            <Button id="Plus3" variant="outline-success"><BsPlusCircle id="plus3" /></Button>

            <h3 id="Board">Board</h3>

            <p id="to3">
                To learn more about
                <br></br>
                becoming an INJAZ
                <br></br>
                board of trustees
            </p>

            <Button id="Plus4" variant="outline-success"><BsPlusCircle id="plus4" /></Button>

        </div>
    );
};

export default Joinus;