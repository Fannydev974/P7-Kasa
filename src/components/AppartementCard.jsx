import React from 'react'
import "./AppartementCard.scss";
import { Link } from 'react-router-dom';

function AppartementCard({ imageUrl, id, title }) {

    return (
        <Link to={`/Appartement/${id}`}>
            <div className="appartement__card">
                <img src={imageUrl} alt="" />
                <div className="appartement__subtitle">{title}</div>
            </div>
        </Link>
    );
}

export default AppartementCard
