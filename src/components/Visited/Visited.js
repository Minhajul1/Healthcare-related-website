import React, { useEffect, useState } from 'react';
import VisitedData from '../VisitedData/VisitedData';
import './Visited.css'

const Visited = () => {
    const [visits, setVisit] = useState([])
    useEffect(() =>{
        fetch('./privateData.JSON')
        .then(response => response.json())
        .then(data => setVisit(data))
    },[])
    return (
        <div>
            <div className="appoinment-form">
                <h2>MAKE AN APPOINTMENT</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Your Name"/>
                    <br/><br/>
                    <input type="text" name="" id="" placeholder="Your Mobile Number"/>
                    <br/><br/>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br/><br/>
                    <input type="text" name="" id="" placeholder="Chooses service"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div>
                <h2>Honorable Doctors</h2>
                <div className="visited-container">
                    {
                        visits.map(visitedData => <VisitedData VisitedData={visitedData}></VisitedData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Visited;