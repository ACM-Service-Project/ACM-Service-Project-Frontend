/* Author: Alexander Berryhill
 * 
 * The code imports React and other necessary components and assets, 
 * including the useLocation hook from react-router-dom. The Sidebar 
 * function component is defined, which renders a sidebar menu.
 * 
 * The useLocation hook is used to get the current location. If the 
 * current location is the login or register page, the sidebar is not 
 * displayed, and null is returned.
 * 
 * Otherwise, the sidebar is displayed with the logo, the name of the 
 * app, and several links to different pages in the app. The last link 
 * is for logging out, and clicking on it will redirect the user to the 
 * logout page.
 */


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

function Sidebar(){
    // Get the current location using the useLocation hook from react-router-dom
    let location = useLocation();
    // If the current location is the login or register page, return null to not display the sidebar
    if (location.pathname==='/login' || location.pathname==='/register'){
        return null;
    }

    // Otherwise, display the sidebar
    return (
        <div id='sidebar'>
            <img src={logo} alt='Logo' className='sidebar-link'></img>
            <img src={familyCrisisCenter} alt='Family Crisis Center' className='fcc-title'></img>
            <Link to='/' className='link'>
                <img src={home} alt='Home' className='sidebar-link'></img>
            </Link>
            <Link to='/search' className='link'>
                <img src={search} alt='Search' className='sidebar-link'></img>
            </Link>
            <Link to='/form' className='link'>
                <img src={profile} alt='Profile' className='sidebar-link'></img>
            </Link>
            <Link to='/settings' className='link'>
                <img src={settings} alt='Settings' className='sidebar-link'></img>
            </Link>
            <Link onClick={()=>window.location.href='/logout'} className='link'>
                <img src={Export} alt='Export' className='sidebar-link'></img>
            </Link>
        </div>
    );
}

export default Sidebar;
