import React from 'react';
//import { Collapse } from '../../Components/Collapse/collapse';
import { SlideShow } from '../../Components/SlideShow/slideShow';
import './about.scss';
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

/*       {aboutData.map(data => {
                    return (
                        <div key={data.id} className='collapse__panel'>
                            <Collapse title={data.title} content={data.content} />
                        </div>
                    )
                })} ligne 16*/