import React from 'react';
import SearchItem from '../components/SearchItem';
import '../styles/Search.css';

function Search(){
    return(
        <div className='main_container'>
            <h1 className='page_title'>FIND PERSON</h1>
            <input className='search_bar' name='search_bar' type='text' placeholder='Search'></input>
            <div className='results'>
                <div className='grid-item'>
                    <p className='grid-name grid-head'>NAME</p>
                    <p className='grid-visit grid-head'>LAST VISIT</p>
                    <p className='grid-status grid-head'>STATUS</p>
                </div>
                <SearchItem
                    name='Alex Berryhill'
                    visit='MM/DD/YYYY'
                />
                <SearchItem
                    name='John Doe'
                    visit='MM/DD/YYYY'
                />
                <SearchItem
                    name='Jane Doe'
                    visit='MM/DD/YYYY'
                />
            </div>
        </div>
    );
}

export default Search;