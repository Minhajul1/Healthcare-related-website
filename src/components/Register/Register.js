import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Please Register</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br/><br/>
                    <input type="password" name="" id="" placeholder="Your Password"/>
                    <br/><br/>
                    <input type="email" name="" id="" placeholder="Re-enter Password"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>--------------or-------------</div>
                <button>Google sign In</button>
            </div>
        </div>
    );
};

export default Register;