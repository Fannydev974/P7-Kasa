import React from 'react';
import Card from '../Card/card';
import './gallery.scss';
import datas from '../../data/data.json'


function Gallery() {
    return (
        <section className='home__gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                        rating={data.rating}
                    />
                )
            })}
        </section>
    )
}

export default Gallery
