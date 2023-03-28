import React from "react";
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';
import '../styles/SearchModal.css'

function SearchItem({name, visit, checkIn, openDeleteModal, openEditModal}){
    return(
        <div className="search-item">
            <p className="search-name">{name}</p>
            <div className="search-visit">
                <p className="visit-container">
                    Last Visit: {visit}
                </p>
            </div>
            <div className="search-status">
                <button onClick={checkIn} className="check-in-btn">Check In</button>
                <button type="button" onClick={openEditModal} className="edit-btn">
                    <img src={editImg} alt='edit'></img>
                </button>
                <button type="button" onClick={openDeleteModal} className="delete-btn">
                    <img src={deleteImg} alt='delete'></img>
                </button>
            </div>
        </div>
    )
}

export default SearchItem;