import React from 'react';
import { SlideShow } from '../../Components/SlideShow/slideShow';
import './About.scss';
import { Collapse } from '../../Components/Collapse/collapse';



function About() {

    return (
        <>
            <div className='about__img'>
                <SlideShow />
            </div>
            <div className="about__container">
                <Collapse title="Fiabilité" />
                <Collapse title="Respect" />
                <Collapse title="Service" />
                <Collapse title="Sécurité" />
            </div>
        </>
    )
}

export default About
