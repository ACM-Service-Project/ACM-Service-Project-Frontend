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
import logo from '../assets/logo-fb.png';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar(){
    // Get the current location using the useLocation hook from react-router-dom
    let location = useLocation();
    // If the current location is the login or register page, return null to not display the sidebar
    if (location.pathname==='/login' || location.pathname==='/register'){
        return null;
    }

    // Otherwise, display the sidebar
    return (
        <div className='sidebar'>
            <div className='side-logo'>
            <img src={logo} alt='Logo' className='sidebar-link'></img>

            </div>  
            <Link to='/' className='link'>
                <HomeIcon/><p>Home</p>
            </Link>
            <Link to='/search' className='link'>
                <SearchIcon/><p>Directory</p>
            </Link>
            <Link to='/form' className='link'>
                <PersonIcon/><p>Check-In</p>
            </Link>

            <Link to='/settings' className='link'>
                <SettingsIcon/><p>Settings</p>
            </Link>
            <Link onClick={()=>window.location.href='/logout'} className='link'>
                <LogoutIcon/><p>Logout</p>
            </Link>
        </div>
    );
}

export default Sidebar;
