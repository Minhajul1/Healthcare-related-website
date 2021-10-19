import React, { useEffect, useState } from 'react';
import ServicesData from '../ServicesData/ServicesData';
import './Services.css'

const Services = () => {
    const [services, setService] = useState([])
    useEffect( () => {
        fetch('./services.JSON')
        .then(response => response.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>Our services</h1>
            <div className="service-container">
                {
                    services.map(servicesData => <ServicesData servicesData={servicesData}></ServicesData>)
                }
            </div>
        </div>
    );
};

export default Services;