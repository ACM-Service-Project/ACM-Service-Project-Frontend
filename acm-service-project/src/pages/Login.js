import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Login.css';
import LoginLogo from '../assets/loginLogo.png';

function Login(){
    return (
        <div className='login_container'>
            <div id='left_photo_container'></div>
            <div id='right_container'>
                <div id='content_container'>
                    <img id='login_logo' src={LoginLogo} alt='Family Crisis Center Logo'/>
                    <p id='title'>FOOD BANK</p>
                    <form>
                        
                        <input type="text" className='input' id='username' placeholder='Username' name='username'/>
            
                        <input type="text" className='input' id='password' placeholder='Password' name='password'/>
                        <button type="submit" id='submit'>LOG IN</button>
                    </form>
                    <div className='register_link'>
                        <p>Don't have an account? </p>
                    <Link to = '/register' className='link' >
                        Sign Up
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;