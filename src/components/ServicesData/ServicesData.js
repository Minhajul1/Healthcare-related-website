import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesData.css'

const servicesData = (props) => {
    const {name, img, details} = props.servicesData
    return (
        <div className="service-data-card">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{details}</p>
            <NavLink to="/visited">Visit Now</NavLink>
        </div>
    );
};

export default servicesData;