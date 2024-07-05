import React, { useEffect, useState } from 'react';
import garageData from '../../data/garage-data';
import './Garage.css'
import Vehicule from '../Vehicule/Vehicule.jsx';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const Garage = () => {
    const [vehicules, setVehicules] = useState(garageData);

    // Début de dev de l'ajout de véhicule

    // const addvec = ()=>{
    //     setVehicules([
    //             ...vehicules,
    //             {
    //                 id: 4, 
    //                 type: "Voiture",
    //                 marque: "Ferrari",
    //                 couleur: "Verte",
    //                 annee_fabrication: 2015,
    //                 specs: {
    //                      nb_chevaux: 120,
    //                      carburant: "Essence"
    //                 }
    //              }
    //         ]
    //     )
    // };

    // const handleChange = (event) => {
    //     setNewVehicule(newVehicule=>({
    //         ...newVehicule,
    //         [event.target.name] : event.target.value}));
    //   };

    return (
        <>
        {/* <div className="AjoutForm">
            <h4>Ajouter :</h4>
            <Select sx={{ml:2}}
            name="type"
            value={newVehicule.type}
            label="Type de véhicule"
            onChange={handleChange}
            variant="standard"
            >
                <MenuItem value={"Voiture"}>Voiture</MenuItem>
                <MenuItem value={"Moto"}>Moto</MenuItem>
                <MenuItem value={"Camion"}>Camion</MenuItem>
            </Select>
            <TextField name="marque" variant="standard" onChange={handleChangeMarque}/>
        </div> */}
        <div className="Garage">
            { vehicules.length > 0 ? vehicules.map((vehicule)=>{
                return <Vehicule data={vehicule} key={vehicule.id} />
            }) : <p>Aucun véhicule ajouté.</p>}
        </div>
        </>
    );
};

export default Garage;