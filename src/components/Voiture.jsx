import React from 'react';
import './Vehicule/Vehicule.css';

const Voiture = (props) => {
    return (
        <>
        <div className="VehiculeInfoRow">
            <h4>Nombre de chevaux : {props.specs.nb_chevaux}</h4>
        </div>
        <div className="VehiculeInfoRow">
            <h4>Carburant : {props.specs.carburant}</h4>
        </div>
        </>
    );
};

export default Voiture;