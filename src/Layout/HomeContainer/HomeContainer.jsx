import React from 'react'
import "./HomeContainer.scss";

function HomeContainer({ children }) {
    return (
        <div className="main">{...children}</div>
    )
}

export default HomeContainer;
