import React from "react";
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';
// import SearchItem from '../components/SearchItem';

function SearchItem({name, visit}){
    return(
        <div className="grid-item">
            <p className="grid-name">{name}</p>
            <div className="grid-visit">
                <p className="visit-container">
                    Last Visit: {visit}
                </p>
            </div>
            <div className="grid-status">
                <button className="check-in-btn">Check In</button>
                <button className="edit-btn">
                    <img src={editImg} alt='edit'></img>
                </button>
                <button className="delete-btn">
                    <img src={deleteImg} alt='delete'></img>
                </button>
            </div>

        </div>
    )
}

export default SearchItem;