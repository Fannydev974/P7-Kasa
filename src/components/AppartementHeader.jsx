import React from 'react'
import "./AppartementHeader.scss";

export function AppartementHeader() {
    return (
        <div className="appartement__header">
            <div className="appartement__container">
                <h1>Crazy loft on the canal Saint-Martin</h1>
                <h2>Paris, Ile de France</h2>
                <div className="appartement__tags">
                    <span>Cosy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                </div>
            </div>
            <div className="appartement__container__client">
                <div className="client__details">
                    <h3>
                        <span>Alaxandre </span>
                        <span>Dumas </span>
                    </h3>
                    <div className="appartement__client__badge">
                        <img src="public/Host.png" alt="badge" />
                    </div>
                </div>
                <div className="appartement__client__stars">
                    <span> ☆</span>
                    <span> ☆</span>
                    <span> ☆</span>
                    <span> ☆</span>
                    <span> ☆</span>

                </div>
            </div>
        </div>
    );
}


