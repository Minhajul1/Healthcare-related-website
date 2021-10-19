import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>SEND US MESSAGE</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Full Name"/>
                    <br/><br/>
                    <input type="email" name="" id=""placeholder="Enter Email"/>
                    <br/><br/>
                    <input type="text" name="" id=""placeholder="Subject"/>
                    <br/><br/>
                    <input type="text" name="" id=""placeholder="Comment"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="contact-details">
                <h3>Pahartoli,Chittagong,Bangladesh</h3>
                <p> Open Hour: 9am~5pm (Friday Close) Book An Appointment. Anesthesiology. Professor (Dr.) Maswood Ahmed. Senior Consultant and Head of Department (Anesthesiology) Dr. Md. Kutub Uddin Khan.</p>
                <h1>+6548235819823</h1>
            </div>
        </div>
    );
};

export default Contact;