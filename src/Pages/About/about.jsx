import React from 'react';
//import { SlideShow } from '../../Components/SlideShow/slideShow';
import './About.scss';
import { Collapse } from '../../Components/Collapse/collapse';
import ImageBanner from '../../Components/imageBanner';
//import Banner from '../../Layout/Banner/banner';
import aboutBanner from '../../assets/background.jpg'


function About() {

    return (
        <>

            <img src={aboutBanner} alt="image banner" />
            {/*<div className='about__img'></div>*/}

            <div className="about__container">
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Service" content=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </>
    )
}

export default About

// <SlideShow />