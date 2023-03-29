import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo-fb.png';
import familyCrisisCenter from '../assets/familyCrisisCenter.png';
import home from '../assets/home.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import settings from '../assets/settings.png';
import Export from '../assets/export.png'; 
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
function Sidebar(){
    let location = useLocation();
    if (location.pathname==='/'){
        return null;
    }
    return (
        <div id='sidebar'>
            <div className='side-logo'>
            <img src={logo} alt='Logo' className='sidebar-link'></img>
            </div>  
            <Link to='/dashboard' className='link'>
                <HomeIcon/><p>Home</p>
            </Link>
            <Link to='/search' className='link'>
                <SearchIcon/><p>Directory</p>
            </Link>
            <Link to='/form' className='link'>
                <PersonIcon/><p>Check-In</p>
            </Link>
            <Link className='link'>
                <SettingsIcon/><p>Settings</p>
            </Link>
            <Link onClick={()=>window.location.href='/logout'} className='link'>
                <LogoutIcon/><p>Logout</p>
            </Link>
        </div>
    );
}

export default Sidebar;