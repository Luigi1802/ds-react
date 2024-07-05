import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import './Vehicule.css';
import voitureAudio from '../../sounds/voiture.mp3';
import camionAudio from '../../sounds/camion.mp3';
import motoAudio from '../../sounds/moto.mp3';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Moto from '../Moto';
import Voiture from '../Voiture';
import Camion from '../Camion';

// Fonction d'animation du boutons "afficher les détails"
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
const Vehicule = (props) => {
    // useState d'affichage des détails et fonction associée au clic
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded); 
    };   

    // Import sons des vehicules
    const voitureSound = new Audio(voitureAudio);
    const camionSound = new Audio(camionAudio);
    const motoSound = new Audio(motoAudio);

    // Fonction pour jouer le son d'un vehicule
    const playSound = () => {
        switch (props.data.type) {
            case "Moto":
                motoSound.play();
                break;
            case "Camion":
                camionSound.play();
                break;
            default:
                voitureSound.play();
                break;
        }
    }

    // Affichage de la bonne icone en fonction du type de vehicule
    const vehiculeTypeIcon = () => {
        switch (props.data.type) {
            case "Moto":
                return <TwoWheelerIcon sx={{mr:1}}/>;
            case "Camion":
                return <LocalShippingIcon sx={{mr:1}}/>;
            default:
                return <DirectionsCarIcon sx={{mr:1}}/>;
        }
    };

    // Affichage des caractéristiques propre a chaque type de véhicule
    const showSpecs = () => {
        switch (props.data.type) {
            case "Moto":
                return <Moto specs={props.data.specs} />;
            case "Camion":
                return <Camion specs={props.data.specs} />;
            default:
                return <Voiture specs={props.data.specs} />;
        }
    }

    return (
        <div className="Vehicule">
            {/* Infos globales */}
            <div className="VehiculeInfo">
                <div className="VehiculeInfoRow">
                    <h2>Véhicule n°{props.data.id}</h2> 
                    <IconButton sx={{ml:2}} onClick={playSound}>
                        <VolumeUpIcon/>
                    </IconButton>
                </div>
                <div className="VehiculeInfoRow">
                    {vehiculeTypeIcon()}    
                    <h3>{props.data.type} {props.data.marque}</h3>
                </div>
                <div className="VehiculeInfoRow">
                    <ColorLensIcon sx={{mr:1}}/>
                    <h3>{props.data.couleur}</h3>
                </div>
                <div className="VehiculeInfoRow">
                    <FactoryIcon sx={{mr:1}}/>
                    <h3>{props.data.annee_fabrication}</h3>
                </div>
            </div>
            {/* Infos spécifiques au type de véhicule */}
            <div className="VehiculeSpecs">
                <div className="expandButton">
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    sx={{m:2}}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <h4>{expanded ? "Masquer" : "Afficher"} les détails</h4>
                </div>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className="VehiculeInfo">
                        {showSpecs()}
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Vehicule;