import React from 'react'
import "./Location.scss";
import { Link } from 'react-router-dom';

function Location() {
    return (
        <div className="Location">
            <Link to="/Appartement">
                <div className="Location__subtitle">Titre de la location</div>
            </Link>
        </div>
    )
}

export default Location
