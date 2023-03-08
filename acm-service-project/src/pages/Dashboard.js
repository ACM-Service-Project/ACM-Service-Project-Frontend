import React from 'react';
import '../styles/Dashboard.css';
import add_person from '../assets/add_person.png';
import check_in from '../assets/check_in.png'

function Dashboard(){
    const name = "John";
    return(
        <div className='main_container'>
            <p className='welcome'>Welcome {name}</p>
            <div className='container'>
                <div>
                    <img className='add_person' src={add_person} alt="Add person"></img>
                    <p className='add_person_title'>Add Person</p>
                </div>
                <div>
                    <img className='check_in' src={check_in} alt="Check person in"></img>
                    <p className='check_in_title'>Add Person</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;