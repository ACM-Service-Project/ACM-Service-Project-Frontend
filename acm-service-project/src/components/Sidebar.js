import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/Logo.png';
import familyCrisisCenter from '../assets/familyCrisisCenter.png';
import home from '../assets/home.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import settings from '../assets/settings.png';
import Export from '../assets/export.png'; 
import { useLocation } from 'react-router-dom'
import check from '../assets/check.png';

function Sidebar(){
    let location = useLocation();
    console.log(location)
    if (location.pathname==='/'){
        return null;
    }
    return (
        <div id='sidebar'>
            <div  class = 'logo'>
                <img src={logo} alt='Logo' className='sidebar-link'></img>
                <img src={familyCrisisCenter} alt='Family Crisis Center' className='fcc-title'></img>
            </div>
            <Link to='/dashboard' className='link'>
                <img src={home} alt='Home' className='home_img'></img> 
                <a className='sidebar_a' >Home</a>
            </Link>
            <Link to='/search' className='link'>
                <img src={check} alt='check' className='check_img'></img>
                <a className='sidebar_a' >Check-in</a>
            </Link>
            <Link to='/form' className='link'>
                <img src={profile} alt='Profile' className='profile_img'></img>
                <a className='sidebar_a' >Directory</a>
            </Link>
            <Link className='link'>
                <img src={settings} alt='Settings' className='settings_img'></img>
                <a className='sidebar_a' >Settings</a>  
            </Link>
            <Link className='link'>
                <img src={Export} alt='Export' className='export_img'></img>
                <a className='sidebar_a'>Logout</a>
            </Link>
        </div>
    );
}

export default Sidebar;