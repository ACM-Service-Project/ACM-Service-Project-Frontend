import React from 'react';
import '../styles/FormSuccess.css';

function Form(){
    return(
        <div className='main_container'>
            <div className='message_container'>
                <div className='icon_container'>
                    <image className='check'></image>
                </div>
                <img className='check' src='../assets/check_mark.png' alt="Add person"></img>
                <p>Person Name was added to the directory.</p>
                <div className='button_holder'>
                    <button className='back'>Go Back</button>
                    <button className='add_another_person'>Add Person</button>
                </div>
            </div>
        </div>
    );
}
