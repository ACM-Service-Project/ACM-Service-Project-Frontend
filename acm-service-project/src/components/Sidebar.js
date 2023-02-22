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

function Sidebar(){
    return (
        <div id='sidebar'>
            <img src={logo} alt='Logo' className='sidebar-link'></img>
            <img src={familyCrisisCenter} alt='Family Crisis Center' className='fcc-title'></img>
            <Link className='link'>
                <img src={home} alt='Home' className='sidebar-link'></img>
            </Link>
            <Link className='link'>
                <img src={search} alt='Search' className='sidebar-link'></img>
            </Link>
            <Link className='link'>
                <img src={profile} alt='Profile' className='sidebar-link'></img>
            </Link>
            <Link className='link'>
                <img src={settings} alt='Settings' className='sidebar-link'></img>
            </Link>
            <Link className='link'>
                <img src={Export} alt='Export' className='sidebar-link'></img>
            </Link>
        </div>
    );
}

export default Sidebar;