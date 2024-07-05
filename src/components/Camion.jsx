import React from 'react';
import './Vehicule/Vehicule.css';

const Camion = (props) => {
    return (
        <>
        <div className="VehiculeInfoRow">
            <h4>Contenance : {props.specs.contenance} m3</h4>
        </div>
        <div className="VehiculeInfoRow">
            <h4>Poids lourd : {props.specs.poids_lourd ? "Oui" : "Non"}</h4>
        </div>
        </>
    );
};

export default Camion;