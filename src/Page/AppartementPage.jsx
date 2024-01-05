import React from 'react'
import "./AppartementPage.scss";

function AppartementPage() {
    return <div className="Appartement-page">
        <div>
            <img src="public/Background.png" alt="" />
        </div>
        <div className="appartement__container">
            <h1>Crazy loft on the canal Saint-Martin</h1>
            <h2>Paris, Ile de France</h2>
            <div className="appartement__tags">
                <span>Cosy</span>
                <span>Canal</span>
                <span>Paris 10</span>
            </div>
        </div>
        <div className="appartement__client__badge">
            <h3>Alaxandre Dumas</h3>
            <div className="Badge"></div>
            <div className="appartement__client__stars">
                <span> ☆</span>
                <span> ☆</span>
                <span> ☆</span>
                <span> ☆</span>
                <span> ☆</span>
            </div>
        </div>
        <div className="appartement__description">
            <p>Description</p>
            <p>kjirv,opjopjiouhughuhiohknikjijijpinkpok!</p>
        </div>
        <div className="appartement__equipement">
            <p>Description</p>
            <p>ggggggggggggggggggggggggggggggggggggg</p>
        </div>
    </div>
}

export default AppartementPage
