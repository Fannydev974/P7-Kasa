import React from 'react'
import "./Main.scss";

function Main(props) {
    /*console.log("props:", props);*/
    const children = props.children;
    //console.log("children :", children);
    return (
        <div className='main'>{...children}</div>
    )
}

export default Main
