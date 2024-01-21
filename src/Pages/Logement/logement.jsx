import React, { useEffect, useState } from 'react';
import './logement.scss';
import { Collapse } from '../../Components/Collapse/collapse';
import datas from '../../data/data.json';
import { SlideShow } from '../../Components/SlideShow/slideShow';
import { useParams } from 'react-router-dom';
//import { AppartementHeader } from '../../Components/AppartementHeader/appartementHeader';
import LogementHeader from '../../Components/LogementHeader/logementHeader';

function Logement() {

    const [image, setImage] = useState([]);

    const idApartment = useParams("id").id;
    const chooseAppartment = datas.filter(data => data.id === idApartment);

    useEffect(() => {
        const chooseAppartment = datas.filter(data => data.id === idApartment);
        setImage(chooseAppartment[0].pictures);
    }, [idApartment]);

    return (
        <div className='logement-page'>

            <SlideShow pictures={chooseAppartment[0].pictures} numberPhotos={chooseAppartment[0].pictures.length} />

            <LogementHeader chooseAppartment={chooseAppartment[0]} />

            <div className='logement__desc__area'>
                <Collapse title="Description" content={chooseAppartment[0].description} />
                <Collapse title="Équipements" content={chooseAppartment[0].equipments.map((eq, index) => (
                    <li key={index}>{eq}</li>
                ))} />
            </div>
        </div>
    );
}

export default Logement


/*<AppartementHeader />*/