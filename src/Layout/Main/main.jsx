import React from 'react';
import './main.scss';

function Main({ children }) {
    return (
        <div className='main'>
            {children}
        </div>
    )
}

export default Main


//Les children sont une prop spéciale qui permet de passer des composants
//ou des éléments à l'intérieur du composant Main.

//{children} : Place les children (c'est-à-dire les composants ou éléments passés à l'intérieur de Main)
// à l'intérieur du conteneur. 