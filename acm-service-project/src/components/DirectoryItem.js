import React from "react";
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';

function DirectoryItem({name, email, phone, address}){
    return(
        <div className="grid-item">
        <p className="grid-name">{name}</p>
        <p className="grid-email">{email}</p>
        <p className="grid-phone">{phone}</p>
        <p className="grid-address">{address}</p>
       
        <div className="grid-status">
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

export default DirectoryItem;