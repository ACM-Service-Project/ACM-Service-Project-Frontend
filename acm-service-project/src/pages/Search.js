import React, { useState } from 'react';
import SearchItem from '../components/SearchItem';
import '../styles/Search.css';

function Search(){
    const [patronList, setPatronList]=useState(null);
    const [modalIsOpen, setModalIsOpen] = useState('modal')

    function openModal(){
        console.log('in')
        setModalIsOpen('modal')
    }

    const closeModal =()=>{
        setModalIsOpen('hide')
    }
    async function handleChange(e){
        let body={
            firstName: e.target.value
        }
        let res = await fetch("http://localhost:8000/patrons/searchPatrons", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(body)
        })
        console.log('waiting for response');
        res=await res.json();
        let patronListArray= res.map((patron)=>{
            return (
                <SearchItem 
                    name={patron.firstName+' '+patron.lastName}
                    visit='MM/DD/YYYY'
                    openModal={openModal}
                />
            )
        });
        setPatronList(patronListArray)
    }
    return(
        <div className='main_container'>
            <h1 className='page_title'>FIND PERSON</h1>
            <input onChange={handleChange} className='search_bar' name='search_bar' type='text' placeholder='Search'></input>
            <div className='results'>
                <div className='grid-item'>
                    <p className='grid-name grid-header'>NAME</p>
                    <p className='grid-visit grid-header'>LAST VISIT</p>
                    <p className='grid-status grid-header'>STATUS</p>
                </div>
                {patronList}
            </div>
            <div className={modalIsOpen}>
                <div className="greyX_icon">
                    <p className="union">X</p>
                </div>
                <p className="delete_text">
                    Are you sure you want to delete this person?
                </p>
                <div className="delete_button_box">
                    <button onClick={closeModal} className="delete_back">
                        Back
                    </button>
                    <button className="delete_button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;