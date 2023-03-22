import React from 'react';
// import { Link } from 'react-router-dom'
import '../styles/Form.css';
// import LoginLogo from '../assets/loginLogo.png';

async function handleSubmit(e){
    e.preventDefault();
    let form = e.target;
    let body = {
        firstName: form[0].value,
        lastName: form[1].value,
        address: form.address.value,
        phone: form.pNumber.value,
        email: form.email.value
    }

    await fetch("http://localhost:8000/patrons/addPatron", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body:  JSON.stringify(body)
    })
}

function Form(){
    return(
        <div className='main_container'>
            <fieldset>
                <h3>ADD NEW PERSON</h3>
                <form onSubmit={handleSubmit}>
                    <div className='names'>
                        <div className='first'>
                            <label className='fname'>First Name </label><input type='text' name='fName' className='fname'></input>
                        </div>
                        <div className='last'>
                            <label className='lname'>Last Name </label><input type='text' name='lName' className='lname'></input>
                        </div>
                        
                    </div>
                    <label className='address'>Address</label><input type='text' name='address' className='address'></input>
                    <label className='pnumber'>Phone Number</label><input type='tel' name='pNumber' className='pnumber'></input>
                    <label className='email'>Email</label><input type='email' name='email' className='email'></input>
                    <div className='buttonHolder'>
                        <button className='addPerson' type='submit'>ADD</button>
                    </div>
                </form>
                
                
            </fieldset>
        </div>
    );
}

export default Form;