import React from 'react';
import './VisitedData.css'

const VisitedData = (props) => {
    const {name, visitingfee, profession, img} = props.VisitedData
    return (
        <div className="visited-data-card">
            <img src={img} alt=""/>
            <h2>Name: {name}</h2>
            <h3>Profession: {profession}</h3>
            <h4>Visiting fee: {visitingfee}</h4>

        </div>
    );
};

export default VisitedData;