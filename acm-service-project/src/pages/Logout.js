import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    React.useEffect(() => {
        localStorage.removeItem('user');
        console.log('user logged out')
        // redirect to login page or home page
        // you can use the useHistory hook from react-router-dom to do this
        
        navigate('/login');
    }, [navigate]);
  
    return (
      <div>
        <p>You have been logged out.</p>
        <p>Redirecting...</p>
      </div>
    );
}

export default Logout;