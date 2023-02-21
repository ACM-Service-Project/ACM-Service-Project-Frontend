import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
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
            <img src={logo} alt='Logo'></img>
            <img src={familyCrisisCenter} alt='Family Crisis Center'></img>
            <Link>
                <img src={home} alt='Home'></img>
            </Link>
            <Link>
                <img src={search} alt='Search'></img>
            </Link>
            <Link>
                <img src={profile} alt='Profile'></img>
            </Link>
            <Link>
                <img src={settings} alt='Settings'></img>
            </Link>
            <Link>
                <img src={Export} alt='Export'></img>
            </Link>
        </div>
    );
}

export default Sidebar;