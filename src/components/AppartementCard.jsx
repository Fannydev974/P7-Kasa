import React from 'react'
import { Link } from "react-router-dom";
import "./AppartementCard.sccs";


function AppartementCard() {
    return (
        <Link to="/Appartement">
            <div className="appartement">
                <div className="appartement__subtitle">Titre de la location</div>
            </div>
        </Link>
    )
}

export default AppartementCard
