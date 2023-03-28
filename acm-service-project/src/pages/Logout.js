/* Author: Alexander Berryhill
 * 
 * The Logout component is a React component that removes the user's 
 * information from local storage and redirects them to the login page. 
 * It uses the useNavigate hook from React Router to perform the redirection.
 */


// Import the React library and the useNavigate hook from React Router
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define the Logout component
function Logout() {
    // Initialize the useNavigate hook
    const navigate = useNavigate();

    // Use the useEffect hook to remove the user's information from local storage and redirect them to the login page
    React.useEffect(() => {
        localStorage.removeItem('user'); // remove user information from local storage
        console.log('user logged out')

        // Use the navigate function to redirect to the login page
        navigate('/login');
    }, [navigate]);
  
    // Return an HTML structure that displays a message to the user and redirects them to the login page
    return (
      <div>
        <p>You have been logged out.</p>
        <p>Redirecting...</p>
      </div>
    );
}

// Export the Logout component as the default export
export default Logout;