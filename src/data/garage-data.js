// Jeu de données de base du garage
let garageData = [
    {
       id: 1, 
       type: "Voiture",
       marque: "Dacia",
       couleur: "Blanche",
       annee_fabrication: 2018,
       specs: {
            nb_chevaux: 115,
            carburant: "Diesel"
       }
    },
    {
        id: 2, 
        type: "Moto",
        marque: "Suzuki",
        couleur: "Rouge",
        annee_fabrication: 2014,
        specs: {
            cylindree: 50,
            couple: 100
        }
     },
     {
        id: 3, 
        type: "Camion",
        marque: "Renault",
        couleur: "Bleu",
        annee_fabrication: 2002,
        specs: {
            contenance: 7,
            poids_lourd: false
        }
     }
];

export default garageData;