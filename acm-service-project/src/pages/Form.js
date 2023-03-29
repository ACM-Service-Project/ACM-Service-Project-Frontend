/* Author: Alexander Berryhill, Alexis 
 *
 * This is a React component for a form that allows the user to 
 * add a new person to a directory. It uses useState to manage 
 * the state of the form inputs and the modal window. When the 
 * form is submitted, it sends a POST request to a server to 
 * add the new person to the directory. If the request is successful, 
 * a modal window is opened to display a success message. The 
 * component also imports the Modal component from the react-modal 
 * library and some CSS styles.
 */

import React, {useState} from 'react';
import Modal from 'react-modal';
import '../styles/Form.css';

function Form(){
    // Declare state variables to track whether the modal is open and the values of the form fields
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [firstName, setFirstName]=useState(null);
    const [lastName, setLastName]=useState(null);
    
    // Function to open the modal
    function openModal(){
        setModalIsOpen(true)
    }

    // Function to close the modal
    const closeModal =()=>{
        setModalIsOpen(false)
    }

    // Function to handle the form submission
    async function handleSubmit(e){
        e.preventDefault();
        let form = e.target;
        // Extract the form field values and store them in an object
        let body = {
            firstName: form[0].value,
            lastName: form[1].value,
            address: form.address.value,
            phone: form.pNumber.value,
            email: form.email.value
        }
    
        // Send a POST request to the server with the form data
        await fetch("http://localhost:8000/patrons/addPatron", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body:  JSON.stringify(body)
        })
        // Update the state variables to show the success message in the modal
        setFirstName(form[0].value);
        setLastName(form[1].value);
        openModal();
    }

    // Return the form UI and the modal UI
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
                    <label className='age'>Age</label><input type='number' name='age' className='age'></input>
                    <div className='buttonHolder'>
                        <button className='addPerson' type='submit'>ADD</button>
                    </div>
                </form>
            </fieldset>
            <Modal className='modal edit-modal' isOpen={modalIsOpen} ariaHideApp={false}>
                <div className='message_container'>
                    <div className='icon_container'>
                        <image className='check'></image>
                    </div>
                    <img className='check' src='../assets/check_mark.png' alt="Add person"></img>
                    <p>{firstName} {lastName} was added to the directory.</p>
                    <div className='button_holder'>
                        <button className='back' onClick={closeModal}>Go Back</button>
                        <button className='add_another_person'>Add Person</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Form;
