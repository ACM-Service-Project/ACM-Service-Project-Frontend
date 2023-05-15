/* Author: Alexander Berryhill
 * 
 * This is a component named "Dashboard". It renders a welcome 
 * banner with the user's name and the current date, along with 
 * three links to other pages of the application. The links are 
 * represented by images and text, and allow the user to add a 
 * person, check in a person, or view the directory. The component 
 * uses the React framework, and also imports CSS styles and 
 * image assets.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import add_person from '../assets/add_person.png';
import check_in from '../assets/check_in.png';
import search_dashboard from'../assets/search_dashboard.png';

function Dashboard(){
    const name = "John";

    //get the Date 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dt = new Date();
    var date = dt.getDate();

    return(
        <div className='main_container'>

            {/* banner section */}
            <section className='banner_container'>

                <div className='banner_name_container'>
                    <span className='welcome'>Welcome </span>
                    <span className='banner_name'>{name}</span>
                </div>
                <div className="banner_day_container">
                    <h2>{date}</h2>
                    {/* container to display month and day */}
                    <div id="container">
                        <p id="month">{dt.toLocaleString('default', { month: 'long' })}</p>
                        <p id="day">{days[dt.getDay()]}</p> 
                    </div>
                </div>

            </section>
            {/* links to different pages */}

            <div className='container'>
                <Link to='/form' className='add_person_total' >
                    <img className='add_person' src={add_person} alt="Add person"></img>
                    <p className='add_person_title'>Add Person</p>
                </Link>
                <Link to='/search' className='check_in_total' >
                    <img className='check_in' src={check_in} alt="Check person in"></img>
                    <p className='check_in_title'>Check-In</p>
                </Link>
                <Link to='/search' className='search_dashboard_total'>
                    <img className='search_dashboard' src={search_dashboard} alt="Search Dashboard" />
                    <p className='search_dashboard_title'>Directory</p>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
