import React from 'react';
import './Vehicule/Vehicule.css';

const Moto = (props) => {
    return (
        <>
        <div className="VehiculeInfoRow">
            <h4>Cylindrée : {props.specs.cylindree} m3</h4>
        </div>
        <div className="VehiculeInfoRow">
            <h4>Couple : {props.specs.couple} Nm</h4>
        </div>
        </>
    );
};

export default Moto;