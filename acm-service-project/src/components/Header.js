import React from 'react';
import '../styles/Header.css';
import profilePic from '../assets/defaultProfile.png';
import { useLocation } from 'react-router-dom'

function Header(){
    let location = useLocation();
    if (location.pathname==='/'){
        return null;
    }
    return(
        <div className='header'>
            <img className='profile-img' src={profilePic} alt='Profile'></img>
            <p className='profile-name'>John Doe</p>
        </div>
    );
}

export default Header;