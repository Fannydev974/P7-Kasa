import React, { useEffect, useState } from 'react'
import "./AppartementGrid.scss";
import AppartementCard from "./AppartementCard.jsx";


function AppartementGrid() {
    const [appartements, setAppartements] = useState([]);

    useEffect(fetchAppartements, []);
    //useEffect avec une array vide == exécute(1seule fois) cette fonction au chargement du composant(appartementgrid)
    function fetchAppartements() {
        fetch("./Datas/data.json")
            .then((response) => response.json())
            .then((logements) => setAppartements(logements))
            .catch(console.error);
    }

    return (
        <div className="grid">
            {appartements.map((appartement, index) => (
                <AppartementCard title={appartement.title} imageUrl={appartement.cover} id={appartement.id} key={index} />
            ))}
        </div>
    );
}

export default AppartementGrid


