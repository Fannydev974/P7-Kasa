
import './logement.scss';
import { Collapse } from '../../Components/Collapse/collapse';
import datas from '../../data/data.json';
import { SlideShow } from '../../Components/SlideShow/slideShow';
import { useParams } from 'react-router-dom';
import LogementHeader from '../../Components/LogementHeader/logementHeader';


function Logement() {

    const idApartment = useParams("id").id;//utilisé pour extraire le paramètre d'ID de l'URL.
    const chooseAppartment = datas.filter(data => data.id === idApartment)[0];
    //pour rechercher le logement correspondant à l'ID extrait dans le fichier JSON


    if (!chooseAppartment) {
        return <Error />
    }//S'il n'y a pas de logement correspondant à l'ID, le composant Error est renvoyé.

    return (

        <div className='logement-page'>

            {chooseAppartment && <SlideShow pictures={chooseAppartment.pictures} numberPhotos={chooseAppartment.pictures.length} />}

            <LogementHeader chooseAppartment={chooseAppartment} />

            <div className='logement__description__collapse'>
                <Collapse title="Description" content={chooseAppartment.description} />
                {/*le titre et le contenu de la section, qui est extrait des données de l'appartement */}
                <Collapse title="Équipements" content={chooseAppartment.equipments.map((equipments, index) => (
                    <li key={index}>{equipments}</li>
                    //utilise la méthode map pour itérer sur la liste des équipements et rend chaque éléments de la liste en <li>
                ))} />
            </div>
        </div>
    );

}

export default Logement


