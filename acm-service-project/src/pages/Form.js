import React from 'react';
// import { Link } from 'react-router-dom'
import '../styles/Form.css';
// import LoginLogo from '../assets/loginLogo.png';

function Form(){
    return(
        <div className='main_container'>
            <fieldset>
                <h3>ADD NEW PERSON</h3>
                <form>
                    <div class='names'>
                        <div class='first'>
                            <label class='fname'>First Name </label><input type='text' name='fName' class='fname'></input>
                        </div>
                        <div class='last'>
                            <label class='lname'>Last Name </label><input type='text' name='lName' class='lname'></input>
                        </div>
                        
                    </div>
                    <label class='address'>Address</label><input type='text' name='address' class='address'></input>
                    <label class='pnumber'>Phone Number</label><input type='tel' name='pNumber' class='pnumber'></input>
                    <label class='email'>Email</label><input type='email' name='email' class='email'></input>
                </form>
                <div class='buttonHolder'>
                    <button id='addPerson' type='submit'>ADD</button>
                </div>
                
            </fieldset>
        </div>
    );
}

export default Form;