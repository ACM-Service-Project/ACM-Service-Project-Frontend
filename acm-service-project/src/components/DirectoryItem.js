/* Author:
 * 
 * This component is called "DirectoryItem", it is a functional 
 * component that displays information about a directory item, 
 * such as the name, email, phone number, and address. It also 
 * includes buttons for editing and deleting the directory item, 
 * represented by images of an edit icon and a delete icon respectively.
 */

import React from "react";
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';

function DirectoryItem({name, email, phone, address}){ // Define the component and props
    return(
        <div className="grid-item"> {/* Main container of the directory item */}
            <p className="grid-name">{name}</p> {/* Display the name */}
            <p className="grid-email">{email}</p> {/* Display the email */}
            <p className="grid-phone">{phone}</p> {/* Display the phone number */}
            <p className="grid-address">{address}</p> {/* Display the address */}
            <div className="grid-status"> {/* Container for edit and delete buttons */}
                <button className="edit-btn"> {/* Edit button */}
                    <img src={editImg} alt='edit'></img> {/* Image for edit button */}
                </button>
                <button className="delete-btn"> {/* Delete button */}
                    <img src={deleteImg} alt='delete'></img> {/* Image for delete button */}
                </button>
            </div>
        </div>
    )
}

export default DirectoryItem; // Export the component for use in other parts of the application
