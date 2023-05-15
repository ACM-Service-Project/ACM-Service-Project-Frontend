/* Author: Alexander Berryhill
 * 
 * This component is responsible for rendering the header of the web 
 * application. The header contains the profile picture and name of 
 * the user. The `useLocation` hook from `react-router-dom` is used 
 * to get the current location. If the current location is on the 
 * login or register page, the header will be hidden. Otherwise, it 
 * will show the profile picture and name.
 */

import '../styles/Header.css';
import profilePic from '../assets/defaultProfile.png';
import { useLocation } from 'react-router-dom'

function Header(){
    // get the current location using useLocation hook from react-router-dom
    let location = useLocation();
    // if the location is on login or register pages, hide the header
    if (location.pathname==='/login' || location.pathname==='/register'){
        return null;
    }
    // otherwise, show the header with profile picture and name
    return(
        <div className='header'>
            <img className='profile-img' src={profilePic} alt='Profile'></img>
            <p className='profile-name'>John Doe</p>
        </div>
    );
}

export default Header;