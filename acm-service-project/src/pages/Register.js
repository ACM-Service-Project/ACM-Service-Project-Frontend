import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/register.css';
import LoginLogo from '../assets/loginLogo.png';

function Register(){
    return (
        <div className='login_container'>
            <div className='left_photo_container'></div>
            <div className='right_container'>
                <div className='content_container'>
                    <img className='login_logo' src={LoginLogo} alt='Family Crisis Center Logo'/>
                    <p className='title'>FOOD BANK</p>
                    <form>
                        <label for='username'>Username</label>
                        <input type="text" className='input' id='username' placeholder='Username' name='username'/>
                        <label for='email'>Email</label>
                        <input type="email" className='input' id='email' placeholder='Email' name='email'/>
                        <label for='password'>Password</label>
                        <input type="password" className='input' id='password' placeholder='Password' name='password'/>
                        <label for='confirm_password'>Confirm Password</label>
                        <input type="password" className='input' id='confirm_password' placeholder='Confirm Password' name='confirm_password'/>
                        <button type="submit" id='submit'>Create Account</button>
                    </form>
                    <Link to = '/' className='login_link'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;

// this better work