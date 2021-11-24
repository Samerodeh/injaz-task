import React from 'react';
import './Map.css'
import './Main.css'
import Mapbackground from '../assest/map.png'

const Map = () => {
    return (
        <div>
            <div className="Map">
                <img id="Mappic" src={Mapbackground} alt="" />
            </div>
        </div>
    );
};

export default Map;