import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="nabvar">
            <nav style={{backgroundColor:"black",padding:"20px"}}>
                <NavLink to="/home"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Home</NavLink>
                <NavLink to="/services"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Services</NavLink>
                <NavLink to="/about"style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>About</NavLink>
                <NavLink to="/post" style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Post</NavLink>
                <NavLink to="/contact" style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Contact</NavLink>
                <span style={{color:"white"}}>{user.displayName}</span>
                {
                    user.email ?
                    <button onClick={logOut}>logout</button>
                    :
                    <NavLink to="/login" style={{padding:"20px",fontSize:"20px",fontWeight:"bold",color:"white",textDecoration:"none"}}>login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;