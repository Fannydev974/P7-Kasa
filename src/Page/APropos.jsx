import React from 'react'
import '../Page/APropos.scss';
import { DescriptionCollapse } from '../components/DescriptionCollapse.jsx';
import { ImageBanner } from '../components/ImageBanner.jsx';

function APropos() {
    return (
        <>
            <ImageBanner />
            <div className="aPropos__container">
                <DescriptionCollapse />
                <DescriptionCollapse />
                <DescriptionCollapse />
                <DescriptionCollapse />
            </div>
        </>
    );
}
export default APropos

