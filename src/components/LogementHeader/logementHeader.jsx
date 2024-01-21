import React from 'react';
import './logementHeader.scss';

function LogementHeader({ chooseAppartment }) {

    // Split du nom
    const name = chooseAppartment.host.name.split(' ');
    const rating = chooseAppartment.rating;

    return (
        <section className="apartment__header">
            <div className='apartment__title'>
                <h1>{chooseAppartment.title}</h1>
                <p>{chooseAppartment.location}</p>
                <div className="apartment__tags">
                    {chooseAppartment.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="apartment__owner">
                <div className="apartment__owner__details">
                    <h3>
                        <span>{name[0]}</span>
                        <span>{name[1]}</span>
                    </h3>
                    <div className="apartment__owner__badge">
                        <img src={chooseAppartment.host.picture} />
                    </div>
                </div>
                <div className='apartment__owner__stars'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={chooseAppartment.rating >= num ? "on" : ""}>★</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogementHeader
