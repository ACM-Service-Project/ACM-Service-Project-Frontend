import React from 'react';

function Form(){
    return(
        <div className='mainContainer'>
            <fieldset>
                <h3>ADD NEW PERSON</h3>
                <form>
                    <label>First Name</label><input type='text' name='fName'></input>
                    <label>Last Name</label><input type='text' name='lName'></input>
                    <label>Address</label><input type='text' name='address'></input>
                    <label>Phone Number</label><input type='tel' name='pNumber'></input>
                    <label>Email</label><input type='email' name='email'></input>
                </form>
                <button id='addPerson' type='submit'>ADD</button>
            </fieldset>
        </div>
    );
}

export default Form;