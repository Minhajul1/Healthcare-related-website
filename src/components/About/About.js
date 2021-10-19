import React from 'react';
import img from '../../images/Medical councelling.png'
import './About.css'
const About = () => {
    return (
        <div className="about">
            <h1>MEDICAL COUNSELING</h1>
            <img src={img} alt=""/>
            <p>Mental health counselors choose from a plethora of approaches when helping someone. The particular approach used depends on both the counselor's professional preference as well as the nature and characteristics of an individual client.Each approach has a particular focus. Mental health counseling methods can emphasize a person's background, emotions, thoughts, behaviors, or a combination of these elements. Within each category are specific theoretical techniques. Below is a list of the most common approaches, or theories. The list is meant as a starting point for exploration. If there are some methods that resonate with you, you can inquire about the theoretical approach when you are searching for a counselor.</p>
        </div>
    );
};

export default About;