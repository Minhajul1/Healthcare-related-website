import React, { useEffect, useState } from 'react';
import img from '../../images/Doctors-pana.png'
import HomeData from '../HomeData/HomeData';
import './Home.css'

const Home = () => {
    const [intros , setIntro] = useState([]);
    useEffect( () =>{
        fetch('./homeData.JSON')
        .then(response => response.json())
        .then(data => setIntro(data))
    },[])
    return (
        <div>
            <div className="banner">
                <div>
                    <img src={img} alt=""/>
                </div>
                <div className="h-tag">
                    <h1>Stay Safe, Stay Healthy</h1>
                    <h2>Caring for your life</h2>
                </div>
            </div>
            <div className="home-card">
               {
                   intros.map(homeData => <HomeData homeData={homeData}></HomeData>)
               } 
            </div>
        </div>
    );
};

export default Home;