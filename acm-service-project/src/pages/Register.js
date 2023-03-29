/* Authors: Alexander Berryhill, Jacob Brooks
 * 
 * This is a React component for a registration form. It imports the Link component from 
 * react-router-dom for navigating to the login page, and an image file for the logo.
 * 
 * The component defines a function handleSubmit that is called when the registration form 
 * is submitted. It retrieves the input values from the form fields and sends a POST request 
 * to a local server to add a new user.
 * 
 * The Register function returns a JSX element that renders the registration form with input 
 * fields for first name, last name, phone number, email, username, and password. The form 
 * also has a button for submitting the registration and a link to the login page. The JSX also 
 * includes some CSS classes for styling purposes.
 * 
 * Finally, the Register function is exported as the default export of the module.
 */

import React from 'react'; // Import React library
import { Link } from 'react-router-dom' // Import Link component from React Router
import '../styles/Register.css'; // Import CSS file for styling
import LoginLogo from '../assets/loginLogo.png'; // Import image asset

async function handleSubmit(e){ // Define function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    
    // Extract form values
    let form = e.target;
    let body = {
        firstName: form.firstname.value,
        lastName: form.lastname.value,
        username: form.username.value,
        password: form.password.value,
        phone: form.phonenumber.value,
        email: form.email.value
    }
    
    // Send POST request to server to create new user
    await fetch("http://localhost:8000/users/addUser", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body:  JSON.stringify(body)
    })
}

function Register(){ // Define Register component
    return (
        <div className='login_container'> {/* Top-level container */}
            <div className='left_photo_container'></div> {/* Left-side image container */}
            <div className='right_container'> {/* Right-side content container */}
                <div className='content_container'> {/* Content container */}
                    <img className='login_logo' src={LoginLogo} alt='Family Crisis Center Logo'/> {/* Logo image */}
                    <p className='title'>FOOD BANK</p> {/* Page title */}
                    <form onSubmit={handleSubmit}> {/* Form for user registration */}
                        <label for='firstname'>First Name</label> {/* Label for first name input */}
                        <input type="text" className='input' id='firstname' placeholder='First Name' name='firstname'/> {/* Input for first name */}

                        <label for='lastname'>Last Name</label> {/* Label for last name input */}
                        <input type="text" className='input' id='lastname' placeholder='Last Name' name='lastname'/> {/* Input for last name */}

                        <label for='phonenumber'>Phone Number</label> {/* Label for phone number input */}
                        <input type="text" className='input' id='phonenumber' placeholder='phonenumber' name='phonenumber'/> {/* Input for phone number */}

                        <label for='email'>Email</label> {/* Label for email input */}
                        <input type="email" className='input' id='email' placeholder='Email' name='email'/> {/* Input for email */}

                        <label for='username'>Usename</label> {/* Label for username input */}
                        <input type="text" className='input' id='username' placeholder='Username' name='username'/> {/* Input for username */}

                        <label for='password'>Password</label> {/* Label for password input */}
                        <input type="password" className='input' id='password' placeholder='Password' name='password'/> {/* Input for password */}

                        <label for='confirm_password'>Confirm Password</label> {/* Label for password confirmation input */}
                        <input type="password" className='input' id='confirm_password' placeholder='Confirm Password' name='confirm_password'/> {/* Input for password confirmation */}

                        <button type="submit" id='submit'>Create Account</button> {/* Button to submit form */}

                    </form>
                    <Link to = '/login' className='login_link'> {/* Link to login page */}
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register; // Export Register component for use in other files
