import React from 'react'
import "./Main.css";

function Main(props) {
    /*console.log("props:", props);*/
    const children = props.children;
    console.log("children :", children);
    return (
        <div className='main'>{...children}</div>
    )
}

export default Main
