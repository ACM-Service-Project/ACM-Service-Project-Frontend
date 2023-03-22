// Importing necessary modules

import React, { useState } from 'react';
import SearchItem from '../components/SearchItem';
import Modal from "react-modal"
import '../styles/Search.css';

// Function to check in a patron
async function checkIn(patronId){
    let body={
        patronId: patronId
    }
    // Making a post request to the server to add the visit
    await fetch('http://localhost:8000/visits/addVisit',{
        method:"post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    console.log('hit')
}

// Search component
function Search(){
    // State variables for the component
    const [patronList, setPatronList]=useState(null);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [currentPatronId, setcurrentPatronId]=useState(null);
    // Edit Defaults
    const [firstName, setFirstName]=useState(null);
    const [lastName, setLastName]=useState(null);
    const [email, setEmail]=useState(null);
    const [phone, setPhone]=useState(null);
    const [address, setAddress]=useState(null);


    // function to open the delete confirmation modal
    function openDeleteModal(patronId){
        setcurrentPatronId(patronId)
        setDeleteModalIsOpen(true)
    }

    // function to close the delete confirmation modal
    const closeDeleteModal =()=>{
        setDeleteModalIsOpen(false)
    }

    // function to open the edit patron modal and populate the fields with the patron data
    async function openEditModal(patronId){
        let res = await fetch("http://localhost:8000/patrons/getPatronById/"+patronId,{method:"GET"})
        console.log('waiting for response');
        res=await res.json();
        setFirstName(res.firstName)
        setLastName(res.lastName)
        setEmail(res.email)
        setPhone(res.phone)
        setAddress(res.address)
        setcurrentPatronId(patronId)
        setEditModalIsOpen(true)
    }

    // function to close the edit patron modal
    const closeEditModal =()=>{
        setEditModalIsOpen(false)
    }

    // function to delete a patron and reload the page
    async function deletePatron(id){
        // Making a delete request to the server to delete the patron
        await fetch("http://localhost:8000/patrons/deletePatron/"+id, {
            method: "DELETE"
        })
        // Reload the page
        window.location.reload(false);
    }

    // function to edit a patron and reload the page
    async function editPatron(e, id){
        e.preventDefault();
        let body={
            firstName: e.target.fname.value,
            lastName: e.target.lname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value
        }
        // Making a patch request to the server to update the patron
        await fetch("http://localhost:8000/patrons/updatePatron/"+id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(body)
        })
        // Reload the page
        window.location.reload(false);
    }

    // function to retrieve the last visit for each patron and create a list of SearchItem components
    async function fillSearchItems(res){
        // Object to store the last visits of patrons
        let lastVisits={}

        // Loop through the response array to get each patron's last visit
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            let patronId=element._id.valueOf()

            // Make a GET request to get the last visit of the current patron
            let lastVisit= await fetch("http://localhost:8000/visits/getPatronsLastVisit/"+patronId,{method:"GET"})
            try {
                // Add the last visit date to the lastVisits object
                lastVisits[patronId]=await lastVisit.json()
            } catch (error) {
                lastVisits[patronId]='No Visits'
            }
            
        }
        
        // Create an array of SearchItem components based on the response data
        let patronListArray= res.map((patron)=>{
            let patronId=patron._id.valueOf()
            return (
                <SearchItem 
                    name={patron.firstName+' '+patron.lastName}
                    visit={new Date(lastVisits[patronId].visitDate).toLocaleDateString()}
                    checkIn={()=>checkIn(patronId)}
                    openDeleteModal={()=>openDeleteModal(patronId)}
                    openEditModal={()=>openEditModal(patronId)}
                />
            )
        });

        // If there are no search results, fetch all patrons and try again
        if(patronListArray.length===0){
            let res = await fetch("http://localhost:8000/patrons/getAllPatrons", {
                method: "GET"
            })
            console.log('waiting for response');
            res=await res.json();
            return fillSearchItems(res);
        } else {
            console.log(patronListArray)
            return patronListArray
        }
    }

    // This is an asynchronous function that handles changes to the search bar input.
    async function handleChange(e){
        // Create a body object containing the user's input.
        let body={
            firstName: e.target.value
        }

        // Send a POST request to the local server with the user's input.
        let res = await fetch("http://localhost:8000/patrons/searchPatrons", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(body)
        })

        // Wait for the server response and parse it into JSON format.
        res=await res.json();

        // Set the patronList state variable to a JSX element that displays the search results.
        setPatronList(await fillSearchItems(res))
    }

    // Render the Search component.
    return(
        <div className='main_container'>
            <h1 className='page_title'>FIND PERSON</h1>
            {/* Render an input element that triggers the handleChange function when the user types in it. */}
            <input onChange={handleChange} className='search_bar' name='search_bar' type='text' placeholder='Search'></input>
            {/* Render a div element that displays the search results as a grid of patron information. */}
            <div className='results'>
                <div className='grid-item'>
                    <p className='grid-name grid-header'>NAME</p>
                    <p className='grid-visit grid-header'>LAST VISIT</p>
                    <p className='grid-status grid-header'>STATUS</p>
                </div>
                {patronList}
            </div>
            {/* Render a Modal component that prompts the user to confirm deleting a patron. */}
            <Modal className='modal' isOpen={deleteModalIsOpen} ariaHideApp={false}>
                <div className="greyX_icon">
                    <p className="union">X</p>
                </div>
                <p className="delete_text">
                    Are you sure you want to delete this person?
                </p>
                <div className="delete_button_box">
                    {/* Render a button element that closes the delete confirmation modal. */}
                    <button onClick={closeDeleteModal} className="delete_back">
                        Back
                    </button>
                    {/* Render a button element that triggers the deletePatron function when clicked. */}
                    <button onClick={()=>deletePatron(currentPatronId)} className="delete_button">
                        Delete
                    </button>
                </div>
            </Modal>
            {/* Render a Modal component that displays a form for editing patron information. */}
            <Modal className='modal edit-modal' isOpen={editModalIsOpen} ariaHideApp={false}>
                {/* Render a form element that triggers the editPatron function when submitted. */}
                <form onSubmit={(e)=>editPatron(e, currentPatronId)} className='edit-form'>
                    <div className='first-name'>
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" defaultValue={firstName}></input>
                    </div>
                    <div className='last-name'>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" defaultValue={lastName}></input> 
                    </div>
                    <div className='form-input'>
                        <label for="address">Address:</label>
                        <input type="text" id="address" name="address" defaultValue={address}></input>
                    </div>
                    <div className='form-input'>
                        <label for="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" defaultValue={phone}></input>
                    </div>
                    <div className='form-input'>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" defaultValue={email}></input>
                    </div>
                    <button onClick={closeEditModal} className="delete_back">
                        Back
                    </button>
                    <button type='submit' className="delete_button">
                        Save
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default Search;