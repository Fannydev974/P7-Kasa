import React from 'react'
import "./AppartementPage.scss";
import { ImageBanner } from "../components/ImageBanner.jsx";
import { AppartementHeader } from '../components/AppartementHeader.jsx';
import { DescriptionCollapse } from "../components/DescriptionCollapse.jsx";



function AppartementPage() {
    return (
        <div className="Appartement-page">
            <ImageBanner />
            <AppartementHeader />
            <DescriptionCollapse />
        </div>
    )
}

export default AppartementPage
