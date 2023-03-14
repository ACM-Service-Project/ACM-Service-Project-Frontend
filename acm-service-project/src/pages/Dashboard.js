import React, {useState, useEffect} from 'react';
import '../styles/Dashboard.css';
import add_person from '../assets/add_person.png';
import check_in from '../assets/check_in.png';
import search_dashboard from'../assets/search_dashboard.png';

function Dashboard(){
    // const [quote, setQuote] = useState([])
    const name = "John";

    //get the Date 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dt = new Date();
    var date = dt.getDate();

    // Generate the Quote of the day? everytime it refresh
    // function getQuote(){
    //     fetch("https://type.fit/api/quotes")
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         const r = Math.random()*(1000-1) + 1
    //         const randomNum = Math.floor(r)
    //         setQuote(data[randomNum])
    //     });
    // }

    // useEffect(() => {
    //     getQuote()
    // },[]);

    return(
        <div className='main_container'>
            <section className='banner_container'>
                <div className='banner_name_container'>
                    <span className='welcome'>Welcome </span>
                    <span className='banner_name'>{name}</span>
                </div>
                <div className="banner_day_container">
                    <h2>{date}</h2>
                    <div id="container">
                        <p id="month">{dt.toLocaleString('default', { month: 'long' })}</p>
                        <p id="day">{days[dt.getDay()]}</p> 
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='add_person_total' >
                    <img className='add_person' src={add_person} alt="Add person"></img>
                    <p className='add_person_title'>Add Person</p>
                </div>
                <div className='check_in_total' >
                    <img className='check_in' src={check_in} alt="Check person in"></img>
                    <p className='check_in_title'>Add Person</p>
                </div>
                <div className='seach_dashboard_total'>
                    <img className='search_dashboard' src={search_dashboard} alt="Search Dashboard" />
                    <p className='search_dashboard_title'>Search in Dashboard</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;