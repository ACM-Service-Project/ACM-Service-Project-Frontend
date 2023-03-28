/* Author:
 * 
 * The code defines the Directory component, which 
 * renders the directory page. It imports the DirectoryItem
 * component and the Directory.css stylesheet.
 * 
 * Inside the component, it renders a header with the title 
 * "DIRECTORY" and a search bar. Below the search bar, it 
 * renders a div with the class results that contains a grid 
 * of directory items.
 * 
 * The grid header includes four columns: name, email, phone, 
 * and address. The component renders three DirectoryItem 
 * components, passing in some hardcoded props to display 
 * different directory entries.
 */

import React from 'react';
import DirectoryItem from '../components/DirectoryItem';
import '../styles/Directory.css';

function Directory(){
    // Render the directory page
    return(
        <div className='main_container'>
            <h1 className='page_title'>DIRECTORY</h1>
            <input className='search_bar' name='search_bar' type='text' placeholder='Search'></input>
            <div className='results'>
                <div className="grid-header header-item">
                    <p className='grid-names header-item'>NAME</p>
                    <p className='grid-email header-item'>EMAIL</p>
                    <p className='grid-phone header-item'>PHONE</p>
                    <p className='grid-address header-item'>ADDRESS</p>
                </div>
                <DirectoryItem
                    name='Alex Berryhill'
                    email='demo@gmail.com'
                    phone='(765)123-0309'
                    address='123 W. square lane, Rexburg'
                />
                <DirectoryItem
                    name='John Doe'
                    email='demo@gmail.com'
                    phone='(765)123-0309'
                    address='123 W. square lane, Rexburg'
                />
                <DirectoryItem
                    name='Jane Doe'
                    email='demo@gmail.com'
                    phone='(765)123-0309'
                    address='123 W. square lane, Rexburg'
                />
            </div>
        </div>
    );
}

export default Directory;