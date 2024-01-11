import React from 'react'
import "./AppartementPage.scss";
import { AppartementBanner } from "../components/AppartementBanner";
import { AppartementHeader } from '../components/AppartementHeader';


function AppartementPage() {
    return (
        <div className="Appartement-page">
            <AppartementBanner />
            <AppartementHeader />
            <div className="appartement__collapse">
                <div className="appartement__description">
                    <p className="description__header">
                        <span>Description</span>
                        <img src="public/vectorHaut.svg"></img>

                    </p>
                    <p className="description__content">kjirv,opjopjiouhughuhiohknikjijijpinkpok!</p>
                </div>
                <div className="appartement__equipment">
                    <p className="description__header">
                        <span>Equipements</span>
                        <img src="public/vectorBas.svg"></img>
                    </p>
                    <p className="description__content">ggggggggggggggggggggggggggggggggg</p>
                </div>
            </div >
        </div>
    )
}

export default AppartementPage
