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
    setFirstName(form[0].value);
    setLastName(form[1].value);
    openModal();
}

function Form(){
    const [modelIsOpen, setModalIsOpen] = useState(false);
    const [firstName, setFirstName]=useState(null);
    const [lastName, setLastName]=useState(null);
    function openModal(){
        setModalIsOpen(true)
    }
    const closeModal =()=>{
        setModalIsOpen(false)
    }
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