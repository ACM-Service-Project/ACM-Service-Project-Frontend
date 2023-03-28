// Import React and the styles for the component
import React from "react";
import '../styles/Settings.css';

// Import the default profile picture
import profile from '../assets/defaultProfile.png';

// Define the Settings function component
function Settings() {
    return(
        <div className='main_container'>
            <section id='settings_container'>  
              {/*  Display the page title */}
                <h1 id='page_title'>Profile Settings</h1>
                <section id='settings-info'>
                    <div id='settings-info-header'>
                        {/* Display the profile picture and username */}
                        <img id='profile' src={profile} alt="Profile Pic"></img>
                        <p>John Doe</p>
                    </div>
                    <section id='settings-info-grid'>
                        {/* Display various settings information */}
                        <div>
                            <h2>Username</h2>
                            <p>Johito</p>
                        </div>
                        <div>
                            <h2>Address</h2>
                            <p>Some great address #2345</p>
                        </div>
                        <div>
                            <h2>Email</h2>
                            <p>john@gmail.com</p>
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <p>208 945-3920</p>
                        </div>
                        <div>
                            <h2>Role</h2>
                            <p>Volunteer</p>
                        </div>
                    </section>
                    {/* Display an edit button */}
                    <button type='button'id='button-edit'>Edit</button>
                </section>
            </section>    
        </div>
    )
}

// Export the Settings component as the default export
export default Settings;