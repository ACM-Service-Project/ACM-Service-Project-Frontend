import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Login.css';
import LoginLogo from '../assets/loginLogo.png';

async function handleSubmit(e){
    e.preventDefault();
    let form = e.target;
    
    let body = {
        username: form.username.value,
        password: form.password.value,
    }
    let res = await fetch("http://localhost:8000/users/searchUsers", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body:  JSON.stringify(body)
    })
    let data = await res.json();
    localStorage.setItem('user', JSON.stringify(data[0]))
    // console.log(localStorage.getItem('user'))
    window.location.href = '/';
}

function Login(){
    return (
        <div className='login_container'>
            <div id='left_photo_container'></div>
            <div id='right_container'>
                <div id='content_container'>
                    <img id='login_logo' src={LoginLogo} alt='Family Crisis Center Logo'/>
                    <p id='title'>FOOD BANK</p>
                    <form onSubmit={handleSubmit}>
                        <label for='username'>Username</label>
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