import React from 'react'
import "../components/DescriptionCollapse.scss";


export function DescriptionCollapse() {
    return (
        <div className="appartement__collapse" >

            <div className="appartement__description1">
                <p className="description__header">
                    <span>Description</span>
                    <img src="public/vectorHaut.svg"></img>

                </p>
                <p className="description__content">kjirv,opjopjiouhughuhiohknikjijijpinkpok!</p>
            </div>
            <div className="appartement__description2">
                <p className="description__header">
                    <span>Equipements</span>
                    <img src="public/vectorBas.svg"></img>
                </p>
                <p className="description__content">ggggggggggggggggggggggggggggggggg</p>
            </div>
        </div >

    )
}
export default DescriptionCollapse

