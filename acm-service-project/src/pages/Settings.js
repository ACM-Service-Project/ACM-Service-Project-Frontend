import React from "react";
import '../styles/Settings.css';
import profile from '../assets/defaultProfile.png';

function Settings() {
    return(
        <div className='main_container'>
            <section id='settings_container'>    
                <h1 id='page_title'>Profile Settings</h1>
                <section id='settings-info'>
                    <div id='settings-info-header'>
                        <img id='profile' src={profile} alt="Profile Pic"></img>
                        <p>John Doe</p>
                    </div>
                    <section id='settings-info-grid'>
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
                    <button type='button'id='button-edit'>Edit</button>
                </section>
            </section>    
        </div>
    )
}

export default Settings;