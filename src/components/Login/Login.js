import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Please Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email"/>
                    <br/><br/>
                    <input type="password" name="" id=""/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>New to Account? <Link to="/register">Create Account</Link></p>
                <div>-----------or-----------</div>
                <button onClick={signInUsingGoogle}>Google sign In</button>
            </div>
        </div>
    );
};

export default Login;