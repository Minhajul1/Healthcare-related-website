import React from 'react';
import './HomeData.css'

const HomeData = (props) => {
    const {name,image,details} = props.homeData
    return (
        <div className="home-data-card">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <p>{details}</p>
        </div>
    );
};

export default HomeData;