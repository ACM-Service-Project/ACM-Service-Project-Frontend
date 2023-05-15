/* Author: Alexander Berryhill
 * 
 * This is a functional React component called SearchItem 
 * which renders a single item for a search list. It takes 
 * in some props such as name, visit, checkIn, openDeleteModal, 
 * and openEditModal. It renders a div with the class search-item, 
 * which contains the name of the item (name prop), a visit section 
 * with the last visit date (visit prop), and a status section 
 * with buttons to check in, edit and delete the item (checkIn, 
 * openDeleteModal, and openEditModal props). The edit and delete 
 * buttons use images from local image files editImg and deleteImg.
 */

import React from "react";
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';
import '../styles/SearchModal.css'

function SearchItem({name, visit, checkIn, openDeleteModal, openEditModal}){
    // SearchItem component with props of name, visit, checkIn, openDeleteModal, and openEditModal
    
    return(
        <div className="search-item">
            {/* Display name */}
            <p className="search-name">{name}</p>
            
            <div className="search-visit">
                {/* Display last visit */}
                <p className="visit-container">
                    Last Visit: {visit}
                </p>
            </div>
            
            <div className="search-status">
                {/* Check in button */}
                <button onClick={checkIn} className="check-in-btn">Check In</button>
                
                {/* Edit button */}
                <button type="button" onClick={openEditModal} className="edit-btn">
                    <img src={editImg} alt='edit'></img>
                </button>
                
                {/* Delete button */}
                <button type="button" onClick={openDeleteModal} className="delete-btn">
                    <img src={deleteImg} alt='delete'></img>
                </button>
            </div>
        </div>
    )
}

export default SearchItem;
