/* Authors: Alexander Berryhill, Lesilee Cruz
 * 
 * The Login component is a React component that displays a login 
 * form to the user. When the user submits the form, the component 
 * sends a POST request to the backend API with the user's login 
 * credentials, retrieves the user's information, and stores it in 
 * local storage. The component also includes a link to a 
 * registration page for new users.
 */

// Import the React library and the Link component from React Router
import React from 'react';
import { Link } from 'react-router-dom'

// Import the Login component's CSS file and the login logo
import '../styles/Login.css';
import LoginLogo from '../assets/loginLogo.png';

// Define an asynchronous function named handleSubmit that will be used to submit the login form
async function handleSubmit(e){
    e.preventDefault();
    let form = e.target;
    
    let body = {
        username: form.username.value,
        password: form.password.value,
    }

    // Send a POST request to the backend with the user's login credentials
    let res = await fetch("http://localhost:8000/users/searchUsers", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body:  JSON.stringify(body)
    })

    // Parse the response and store the user's information in local storage
    let data = await res.json();
    localStorage.setItem('user', JSON.stringify(data[0]))

    // Redirect the user to the homepage
    window.location.href = '/';
}

// Define the Login component
function Login(){
    return (
        // Return an HTML structure with a login form
        <div className='login_container'>
            <div id='left_photo_container'></div>
            <div id='right_container'>
                <div id='content_container'>
                    <img id='login_logo' src={LoginLogo} alt='Family Crisis Center Logo'/>
                    <p id='title'>FOOD BANK</p>
                    <form onSubmit={handleSubmit}>
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

// Export the Login component as the default export
export default Login;
