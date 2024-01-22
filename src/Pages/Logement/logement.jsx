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
    //idApartment extrait l'identifiant de l'appartement depuis les paramètres de l'URL à l'aide de useParams.

    useEffect(() => {//se déclenche dès que l'identifiant de idAppartment change
        const chooseAppartment = datas.filter(data => data.id === idApartment);
        setImage(chooseAppartment[0].pictures);
    }, [idApartment]);
    //chooseAppartment = tableau filtré à partir des datas

    return (
        <div className='logement-page'>

            <SlideShow pictures={chooseAppartment[0].pictures} numberPhotos={chooseAppartment[0].pictures.length} />

            <LogementHeader chooseAppartment={chooseAppartment[0]} />

            <div className='logement__description__collapse'>
                <Collapse title="Description" content={chooseAppartment[0].description} />
                {/*le titre et le contenu de la section, qui est extrait des données de l'appartement */}
                <Collapse title="Équipements" content={chooseAppartment[0].equipments.map((equipments, index) => (
                    <li key={index}>{equipments}</li>
                    //utilise la méthode map pour itérer sur la liste des équipements et rend chaque éléments de la liste en <li>
                ))} />
            </div>
        </div>
    );
}

export default Logement


